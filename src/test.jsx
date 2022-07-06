import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

const InputWrapper = styled.div`
    /* color:#333; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 500px;
    height: 800px; */
    /* margin-top: 100px; */
    /* background-color: pink; */
    border-radius: 1rem;
    box-shadow: #354a5389 0px 5px 0px, #354a5389 0px 8px 24px, #354a53 0px 16px 48px;
`;
// const InputRowWapper = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     margin-left: 20px;
//     margin-right: 20px;
// `;
const Content = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-image: '';
`;

const Test = () => {
    const {
		register,
		reset,
		getValues,
		setValue,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm({ mode: "all", reValidateMode: "all" });

    return (
        <Content>
        <InputWrapper>
        <h1>Test</h1>
            <h2>Register</h2>
            <TextField
                label="Name"
                autoFocus
                variant="outlined"
                size="small"
                type="text"
                sx={{
                    color: '#474747',
                    ml: 2,
                    mb: 2,
                    "& .MuiInputLabel-root": { color: 'grey' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "#474747"
                        }
                    }
                }}
                {...register("name", {
                    required: "Please Enter name"
                })}
                InputLabelProps={{
                    style: { color: '#474747' },
                }}
            />
            <TextField
                label="e-mail"
                autoFocus
                variant="outlined"
                size="small"
                type="text"
                sx={{
                    color: '#474747',
                    mb: 2,
                    ml: 2,
                    "& .MuiInputLabel-root": { color: 'grey' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "#474747"
                        }
                    }
                }}
                InputLabelProps={{
                    style: { color: '#474747' },
                }}
                {...register("email", {
                    required: "Please Enter E-mail ID"
                })}
            />
            <TextField
                label="Mobile No."
                autoFocus
                variant="outlined"
                size="small"
                type="text"
                sx={{
                    color: '#474747',
                    mb: 2,
                    ml: 2,
                    "& .MuiInputLabel-root": { color: 'grey' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "#474747"
                        }
                    }
                }}
                InputLabelProps={{
                    style: { color: '#474747' },
                }}
                {...register("mobile", {
                    required: "Please Enter mobile"
                })}
            />
            <TextField
                label="Country"
                autoFocus
                variant="outlined"
                
                size="small"
                type="text"
                sx={{
                    color: '#474747',
                    mb: 2,
                    ml: 2,
                    "& .MuiInputLabel-root": { color: 'grey' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "#474747"
                        }
                    }
                }}
                InputLabelProps={{
                    style: { color: '#474747' },
                }}
            />
            <TextField
                label="City"
                autoFocus
                variant="outlined"
                
                size="small"
                type="text"
                sx={{
                    color: '#474747',
                    mb: 2,
                    ml: 2,
                    "& .MuiInputLabel-root": { color: 'grey' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "#474747"
                        }
                    }
                }}
                InputLabelProps={{
                    style: { color: '#474747' },
                }}
            />
            <TextField
                label="State"
                autoFocus
                variant="outlined"
                
                size="small"
                type="text"
                sx={{
                    color: '#474747',
                    mb: 2,
                    ml: 2,
                    "& .MuiInputLabel-root": { color: 'grey' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "#474747"
                        }
                    }
                }}
                InputLabelProps={{
                    style: { color: '#474747' },
                }}
            />
            <TextField
                label="Message"
                autoFocus
                variant="outlined"
                
                size="small"
                type="text"
                sx={{
                    color: '#474747',
                    mb: 2,
                    ml: 2,
                    "& .MuiInputLabel-root": { color: 'grey' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "#474747"
                        }
                    }
                }}
                InputLabelProps={{
                    style: { color: '#474747' },
                }}
            />
            <Button
                name="register"
                sx={{
                    color: '#474747',
                    mb: 2,
                    backgroundColor: '#fff',
                    border: 2,
                    borderColor: '#474747',
                    borderRadius: 5,
                    ':hover': {
                        bgcolor: '#474747', // theme.palette.primary.main
                        color: 'white',
                        border: 2,
                        borderColor: '#474747',
                    }
                }}
                variant="outlined"
                size="large"
            >Register</Button>

        </InputWrapper>
        </Content>
    );
}

export default Test;