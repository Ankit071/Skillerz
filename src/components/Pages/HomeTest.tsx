import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  addUser,
} from "../../Slices/counterSlice";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
const HomeTest = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<{ name: string; age: number }>({
    name: "",
    age: 0,
  });

  const submitData = (e: FormEvent) => {
    e.preventDefault();

    // console.log(e.target);
    // setUser({
    //   ...user,
    //     name: e.target,
    //   age:e.target
    // });

    console.log(user);

    //   if (user) {
    dispatch(addUser(user));

    //   }
  };
  const handleChanger = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { value, userData } = useSelector((state: RootState) => state.counter);

  useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <div>
      <h2>Home</h2>

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <div>
          <span>{value}</span>
        </div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <div>
          <button onClick={() => dispatch(incrementByAmount(7))}>
            Increment By Amount
          </button>
        </div>
      </div>

      <form onSubmit={submitData}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="name"
            value={user.name}
            name="name"
            onChange={handleChanger}
          />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input
            type="number"
            onChange={handleChanger}
            value={user.age}
            name="age"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HomeTest;
