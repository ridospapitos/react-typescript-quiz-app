import { useEffect, useState } from "react"
import s from './TopListScreen.module.css'

interface Props {
    languageInfo: 'Eng' | 'Рус'
}

const TopListScreen = ( { languageInfo }: Props ) => {
    interface User {
        id: string,
        UserName: string,
        Score: number
    }

    let [TopList, setTopList] = useState<User[] | undefined>(undefined)

    useEffect(() => {
        getTopList()
    }, [])

    async function getTopList() {
        try {
            const resp = await fetch('http://localhost:3000/TopList')
            const data = await resp.json()
            setTopList(data)
        } catch(err) {
            console.log(err)
        }
    }
    
    const ListTemplate = (listElement: User | undefined) => {
        return (
            <li key={listElement?.id}>{`${languageInfo === 'Eng' ? 'User' : 'Пользователь'}: ${listElement?.UserName}, ${languageInfo === 'Eng' ? 'Score' : 'Счёт'}: ${listElement?.Score}`}</li>
        )
    }

    const mappedList = TopList?.slice(0, 10).sort((a, b) => b.Score - a.Score).map((element: User | undefined) => {return ListTemplate(element)})
    
    return (
        <div className={s.Wrapper}>
            <ul>
                {mappedList}
            </ul>
        </div>
    )
}

export default TopListScreen