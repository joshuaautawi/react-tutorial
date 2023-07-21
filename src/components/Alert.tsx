interface AlertProps {
    message: string;
}


export function Alert(props: AlertProps) {
    return <><div className="alert alert-primary">{props.message}</div></>
}