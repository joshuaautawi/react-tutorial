import { MouseEvent, useState } from "react"
import { Alert } from "./Alert";
import { Button } from "./Button";
interface Props {
    data: string[];
    title: string;
}
export function ListGroup(props: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [isAlerted, setIsAlerted] = useState(false)
    const { data, title } = props
    return (
        <>
            <h1>{title}</h1>
            {data.length === 0 && <p className="text-lg-large">No item found </p>}
            <ul className="list-group">
                {
                    data.map((e, i) =>
                    (
                        <li
                            key={e}
                            onClick={() => {
                                setSelectedIndex(i)
                                setIsAlerted(true)
                            }}
                            className={selectedIndex == i ? "list-group-item active" : "list-group-item"} > {e}
                        </li>
                    ))
                }
            </ul >

            <Button>
                Click me
            </Button>
            {isAlerted && <Alert message={`${data[selectedIndex]} is selected`} />}
        </>

    )
}