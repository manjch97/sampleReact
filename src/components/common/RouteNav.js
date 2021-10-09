import { useHistory } from "react-router-dom";

// Use this for all functional components

const BackButton = () => {
    let history = useHistory();
    history.goBack();
}

const NavigateTo = (path) => {
    let history = useHistory();
    history.push(path);
}

export {
    BackButton,
    NavigateTo
};