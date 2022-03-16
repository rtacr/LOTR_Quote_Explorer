import { Autocomplete, Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { fetchQuotes, fetchSuggestions } from "../../service/apiController";
import Character from "../../model/Character";
import QuoteGrid from "../QuoteGrid/QuoteGrid";

const validateInput = (input: String) => {
    if (input !== "" && input !== " " && !(input.length < 3)) {
        return true;
    } else {
        return false;
    }
}

function MainContainer() {
    const initOption: Array<Character> = [];
    const initCharacter: Character = { id: '0', name: '' };
    const [value, setValue] = useState(initCharacter);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(initOption);
    const { data,
        status,
        refetch,
        fetchNextPage,
        isFetchingNextPage } = useInfiniteQuery(['quotes', value],
            ({ pageParam = 0 }) => fetchQuotes(value, pageParam),
            {
                getNextPageParam: lastPage => (parseInt(lastPage.pageNumber) + 1),
                enabled: false, refetchOnWindowFocus: false
            });

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };


    const handleSuggestions = async (input: String) => {
        if (validateInput(input)) {
            const response = await queryClient.fetchQuery(['suggestions', inputValue],
                () => fetchSuggestions(input));
            setOptions(response.suggestions.map((op: Character) => op));
        }
    }

    useEffect(() => {
        const TYPING_STOPPED_THRESHOLD = 1000;
        const timer = setTimeout(() => {
            handleSuggestions(inputValue);
        }, TYPING_STOPPED_THRESHOLD);
        return () => clearTimeout(timer);
    }, [inputValue]);

    const handeClick = async (input: Character) => {
        if (input.name !== '') {
            await refetch();
        }
    }
    const queryClient = useQueryClient();
    return (
        <>
            <Box sx={{
                p: 1,
                m: 1,
                display: "flex",
                flexDirection: "row"
            }}>

                <Box sx={{ flexGrow: 0.4 }} />
                <Autocomplete
                    id="input-ac"
                    data-testid="autocomplete"
                    disablePortal
                    sx={{ width: "50%" }}
                    onChange={(event, newValue) => {
                        if (newValue) {
                            setValue(newValue);
                        }

                    }}
                    isOptionEqualToValue={(op, val) => op.name === val.name}
                    getOptionLabel={(option) => option.name}
                    noOptionsText="No such character exists"
                    options={options}
                    renderInput={(params) => (
                        <TextField {...params}
                            id="outlined-basic"
                            label="Character Name"
                            variant="outlined"
                            color="primary"
                            value={inputValue}
                            onChange={handleChange} />
                    )}
                />
                <Box sx={{ flexGrow: 0.1 }} />
                <Button variant="contained" endIcon={<SearchIcon />}
                    disabled={value.name === ''}
                    color="primary"
                    onClick={() => handeClick(value)}>
                    Search
                </Button>
            </Box>


            <Box sx={{ minHeight: '500px', alignItems: 'center' }}>

                {(status === 'idle' && !data) &&
                    <Typography variant="h3" component="div">
                        Quote List
                    </Typography>}

                {(status === 'success' && data) &&
                    <Typography variant="h3" component="div">
                        Quotes of {data.pages[0].character.name}
                    </Typography>}

                {(status === 'loading') && <CircularProgress />}

                {(status === 'error') &&
                    <Typography variant="h2" component="div">
                        No quote found
                    </Typography>}

                {(status === 'success' && data) &&
                    <Box sx={{ marginLeft: "8%", width: "85%", alignItems: "center" }}>
                        <QuoteGrid key="grid" pages={data.pages} />
                    </Box>}

                {isFetchingNextPage && <CircularProgress />}

                {(!isFetchingNextPage && data) && <Button onClick={() => fetchNextPage()}>Load More...</Button>}

                {(status === "idle" && !data) && <Typography variant="h4">
                    Enter a character name to explore their quotes.
                </Typography>}
            </Box>
        </>)
}

export default MainContainer;