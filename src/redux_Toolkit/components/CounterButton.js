import { useDispatch } from "react-redux";

const CounterButton = ({calcType, step, actionCreator}) => {
    
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(actionCreator(step));
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;