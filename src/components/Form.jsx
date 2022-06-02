import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Card, CardContent, Grid, TextField,Button, Typography } from "@material-ui/core";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    fullName: yup.string().min(3).required(),
    birthDay: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().email().required() ,
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    education: yup.object().shape({
        field:yup.string().min(3).required(),
        institute: yup.string().min(3).required(),
        duration: yup.number().required(),
        description: yup.string()
    }),
    workExperience: yup.object().shape({
        company: yup.string().min(3).required(),
        role: yup.string().min(3).required(),
        workDes: yup.string()
    }),
    skills: yup.object().shape({
        proskills: yup.array(yup.string()),
        softSkills: yup.array(yup.string()),
        codeSkills: yup.array(yup.string())
    }),
    interest: yup.object().shape({
        hobby: yup.string().required(),
        des: yup.string()
    }), 

})

const submitForm = (data) =>{

}

const FormTest = ({setName,setBirthDay,
                    setMail,setCourse,setInstitute,
                    setCourseDuration,setGraduation,
                    setEduDescription,setCompany,setRole,
                    setJobDuration,setJobDescription,
                    setProfSkill,setProfSkillRate,
                    setSoftSkill,setSoftSkillRate,
                    setCodeSkill,setCodeSkillRate,
                    setInterest,setIntDescription,
                    setAddress,setPhone}) => {

    const {register,handleSubmit,formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });

    return ( 
        <Card style={{margin:"0 auto",padding: "20px 20px"}}>
            <CardContent>
                <Typography gutterBottom variant="h4">Form</Typography>
                <Typography gutterBottom color="secondary" variant="body1" component={'p'}>Fill up the form to design your CV</Typography>
                <form>
                <Grid container spacing={1}>
                    <Typography gutterBottom variant="h5">Personal Details</Typography>

                    <Grid xs={12} sm={12} item>
                        <TextField label='Full Name' placeholder="Enter Full Name" fullWidth variant="outlined" size="small" required onChange={(e)=>setName(e.target.value)}/>
                    </Grid>

                    <Grid  xs={12} sm={12} item>
                        <TextField label='Date Of Birth' placeholder="Enter Your Birthday" fullWidth variant="outlined" size="small" required onChange={(e)=>setBirthDay(e.target.value)}/>
                    </Grid>

                    <Grid  xs={12} sm={12} item>
                        <TextField type={'email'} label='Email' placeholder="Enter Your Email" fullWidth variant="outlined" size="small" required onChange={(e)=>setMail(e.target.value)}/>
                    </Grid>

                    <Typography gutterBottom variant="h5">Education</Typography>

                    <Grid  xs={12} sm={12} item>
                        <TextField label='Course' placeholder="Enter Your Course"  fullWidth variant="outlined" size="small" required onChange={(e)=>setCourse(e.target.value)}/>
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <TextField type={'number'} min='1' label='Course Duration' placeholder="Enter Your Course Duration"  fullWidth variant="outlined" size="small" required onChange={(e)=>setCourseDuration(e.target.value)}/>
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <TextField label='Institute' placeholder="Enter Your Institute" fullWidth variant="outlined" size="small"  required onChange={(e)=>setInstitute(e.target.value)}/>
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <TextField label='Graduation' placeholder="Enter Your Graduation Date"  fullWidth variant="outlined" size="small" required onChange={(e)=>setGraduation(e.target.value)}/>
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <TextField label='Description'placeholder="Enter course Description" fullWidth  variant="outlined" size="small" onChange={(e)=>setEduDescription(e.target.value)}/>
                    </Grid>

                    <Typography gutterBottom variant="h5">Work Experience</Typography>

                    <Grid  xs={12} sm={12} item>
                        <TextField label='Company' placeholder="Enter Your company" fullWidth variant="outlined" size="small" onChange={(e)=>setCompany(e.target.value)}/>                       
                    </Grid>
                    <Grid xs={12} sm={12} item>
                         <TextField label='Job Role' placeholder="Enter Your Job Role" fullWidth variant="outlined" size="small" onChange={(e)=>setRole(e.target.value)}/>
                    </Grid>
                    <Grid xs={12} sm={12} item>
                        <TextField label='Job Duration' placeholder="Enter Job Duration" fullWidth variant="outlined" size="small" onChange={(e)=>setJobDuration(e.target.value)}/>
                    </Grid>
                    <Grid xs={12} sm={12} item>
                        <TextField label='Description' placeholder="Enter Job Description" fullWidth variant="outlined" size="small" onChange={(e)=>setJobDescription(e.target.value)}/>
                    </Grid>

                    <Typography gutterBottom variant="h5">Skills</Typography>

                    <Grid  xs={12} sm={12} item>
                        <TextField label='Professional skills' placeholder="Enter Your Professional skills" fullWidth variant="outlined" size="small" onChange={(e)=>setProfSkill(e.target.value)}/>
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <TextField type={'number'} label='Professional skills Rate' placeholder="Enter Your Professional skills Rate" fullWidth variant="outlined" size="small" onChange={(e)=>setProfSkillRate(e.target.value)}/>
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <TextField label='Software Skills' placeholder="Enter Your Software Skills" fullWidth  variant="outlined" size="small" onChange={(e)=>setSoftSkill(e.target.value)}/>
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <TextField type={'number'} label='Software Skills Rate' placeholder="Enter Your Software Skills Rate" fullWidth  variant="outlined" size="small" onChange={(e)=>setSoftSkillRate(e.target.value)}/>
                    </Grid>

                    <Grid xs={12} sm={12} item>
                         <TextField label='Code Skills' placeholder="Enter Your Code Skills" fullWidth variant="outlined" size="small" onChange={(e)=>setCodeSkill(e.target.value)}/>
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <TextField type={'number'} label='Code Skills Rate' placeholder="Enter Your Code Skills Rate" fullWidth variant="outlined" size="small" onChange={(e)=>setCodeSkillRate(e.target.value)}/>
                    </Grid>

                    <Typography gutterBottom variant="h5">Interests</Typography>

                    <Grid  xs={12} sm={12} item>
                        <TextField label='Interests' placeholder="Enter Your Interests" fullWidth variant="outlined" size="small" onChange={(e)=>setInterest(e.target.value)}/>
                    </Grid>

                    <Grid xs={12} sm={12} item>
                        <TextField label='Description' placeholder="Enter about Interest" fullWidth variant="outlined" size="small" onChange={(e)=>setIntDescription(e.target.value)}/>
                    </Grid>

                    <Typography gutterBottom variant="h5">Contact</Typography>

                    <Grid  xs={12} sm={12} item>
                        <TextField label='Address' multiline rows={'2'} placeholder="Enter Your Adress" fullWidth variant="outlined" size="small" required onChange={(e)=>setAddress(e.target.value)}/>
                    </Grid>
                    <Grid  xs={12} sm={12} item>
                        <TextField type={'number'} label='Phone' placeholder="Enter Your Phone Number" fullWidth variant="outlined" size="small"required onChange={(e)=>setPhone(e.target.value)}/>
                    </Grid>
                    <Grid  xs={12} sm={12} item>
                        <Button type="Submit" variant="contained" color="primary">Submit</Button>
                    </Grid>
                </Grid>
                </form>
            </CardContent>
        </Card>   
     );
}
 
export default FormTest;