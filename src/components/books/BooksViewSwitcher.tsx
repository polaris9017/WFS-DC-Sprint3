import styled from 'styled-components';
import Button from "../common/Button";
import {FaList, FaTh} from "react-icons/fa";
import {useSearchParams} from "react-router-dom";
import {queryString} from "../../constants/queryString";
import {useEffect} from "react";

const viewOptions = [
    {value: 'list', icon: <FaList/>},
    {value: 'grid', icon: <FaTh/>}
];

export type ViewMode = 'list' | 'grid';

function BooksViewSwitcher() {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleSwitch = (value: ViewMode) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(queryString.VIEW, value);
        setSearchParams(newSearchParams);
    };

    useEffect(() => {
        if (!searchParams.get(queryString.VIEW)) handleSwitch('grid');
    }, []);

    return (
        <>
            <BooksViewSwitcherStyle>
                {
                    viewOptions.map((it, index) => (
                        <Button key={it.value} size='medium'
                                scheme={searchParams.get(queryString.VIEW) === it.value ? 'primary' : 'normal'}
                                onClick={() => handleSwitch(it.value as ViewMode)}>{it.icon}</Button>
                    ))
                }
            </BooksViewSwitcherStyle>
        </>
    );
}

const BooksViewSwitcherStyle = styled.div`
    display: flex;
    gap: 8px;

    svg {
        fill: white;
    }
`;

export default BooksViewSwitcher;