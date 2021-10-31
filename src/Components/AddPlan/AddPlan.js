import React from 'react';
import MenuBar from '../MenuBar/MenuBar'
import { useForm} from "react-hook-form";
import axios from 'axios';
import Footer from '../Footer/Footer';

const AddPlan = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post(`https://frightful-spider-25135.herokuapp.com/plans`,data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Successfully inserted your custom plan!!")
                reset();
            }
        })
        console.log(data)
    };
    return (
        <div>
            <MenuBar></MenuBar>
            
            <h1 className='my-3 text-success fw-bold'>Add your custom plan</h1>
           <div className="d-flex justify-content-center">
           <form className="w-50 my-4 form-control border border-2 p-4 border-success" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" {...register("title", { required: true, maxLength: 20 })} placeholder="Title" />
                
              
                <input className="form-control mt-3" {...register("img")} placeholder="Img Url" />

                <input className="form-control my-3" {...register("price", { required: true, maxLength: 20 })} placeholder="Price" />

                <textarea className="form-control mt-3" {...register("desc")} placeholder="Desc" rows="10" cols="38" />
                <textarea className="form-control mt-3" {...register("shortDesc")} placeholder="Short Desc" rows="10" cols="38" />

                <input className="btn btn-success fw-bold my-4" type="submit" value='Add'/>
            </form>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default AddPlan;