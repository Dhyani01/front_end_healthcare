import axios from 'axios';
import './App.css';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";

function App() {
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const res= await axios.post('http://127.0.0.1:5000/test_subject',data)
      alert(res.data.result)
    } catch (err) {
    }
  };

  return (
    <div className="root">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        variant="outlined"
        margin="normal"
        required
        className="TextField"
        id="username"
        label="Blood_Pressure"
        placeholder="Blood Pressure"
        name="username"
        {...register("Blood_Pressure")}
      />
      <input
        variant="outlined"
        margin="normal"
        placeholder="weight"
        required
        id="email"
        className="TextField"
        label="weight"
        name="email"
        {...register("weight")}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="submit"
      >
        Submit
    </Button>
    </form>
    </div>
  );
}

export default App;
