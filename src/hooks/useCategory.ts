import {useEffect, useState} from "react";
import {Category} from "../models/category.model";
//import {fetchCategories} from "../api/category.api";
import {useLocation} from "react-router-dom";

export const useCategory = () => {
    const location = useLocation();
    const [category, setCategory] = useState<Category[]>([]);

    const setActive = () => {
        const params = new URLSearchParams(location.search);
        if (params.get('catID')) setCategory((prev) => {
            return prev.map((it) => {
                return {...it, is_active: it.id === Number(params.get('catID'))}
            });
        });
        else setCategory((prev) => {
            return prev.map((it) => {
                return {...it, is_active: false}
            });
        });
    };

    useEffect(() => {
        // 개발 중 서버를 올리지 않는 관계로 일부 함수 임시 주석 처리. 최종 단계에서 주석 해제
        /*fetchCategories().then((category) => {
            if (!category) return;
            const category_all = [
                {
                    id: null, name: '전체', is_active: false,
                },
                ...category];
            setCategory(category_all);
            setActive();
        });*/
        const category_all = [{id: null, name: '전체', is_active: false}, {id: 1, name: '소설', is_active: false}];  // 임시 데이터
        setCategory(category_all);
        setActive();
    }, []);

    useEffect(() => {
        setActive();
    }, [location.search]);

    return {category};
}