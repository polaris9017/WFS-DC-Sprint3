import {FaSmileWink} from "react-icons/fa";
import Empty from "../common/Empty";

function BookEmpty() {
    return (
        <Empty title="검색 결과가 없습니다." icon={<FaSmileWink/>} description="전체 검색 결과로 이동"/>
    );
}

export default BookEmpty;