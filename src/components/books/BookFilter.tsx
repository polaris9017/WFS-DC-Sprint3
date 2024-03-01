import styled from 'styled-components';
import {useCategory} from "../../hooks/useCategory";
import Button from "../common/Button";
import {useSearchParams} from 'react-router-dom'
import {queryString} from "../../constants/queryString";

function BookFilter() {
    const {category} = useCategory();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleCategory = (id: number | null) => {
        const newSearchParams = new URLSearchParams(searchParams);

        if (id === null) newSearchParams.delete(queryString.CATEGORY_ID);
        else newSearchParams.set(queryString.CATEGORY_ID, id.toString());

        setSearchParams(newSearchParams);
    };

    const handleNew = () => {
        const newSearchParams = new URLSearchParams(searchParams);

        if (newSearchParams.get(queryString.IS_NEW)) newSearchParams.delete(queryString.IS_NEW);
        else newSearchParams.set(queryString.IS_NEW, 'true');

        setSearchParams(newSearchParams);
    }

    return (
        <>
            <BookFilterStyle>
                <div className="category">
                    {
                        category.map((it, index) => (
                            <Button size='medium' scheme={it.is_active ? 'primary' : 'normal'}
                                    key={it.id}
                                    onClick={() => handleCategory(it.id)}>{it.name} </Button>
                        ))
                    }
                </div>
                <div className="new">
                    <Button size='medium' scheme={searchParams.get(queryString.IS_NEW) ? 'primary' : 'normal'}
                            onClick={() => handleNew()}>신간</Button>
                </div>
            </BookFilterStyle>
        </>
    );
}

const BookFilterStyle = styled.div`
    display: flex;
    gap: 24px; // category 와 new 사이의 간격

    .category {
        display: flex;
        gap: 8px;
    }
`;

export default BookFilter;