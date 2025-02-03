import React, { useRef, useState } from 'react'

import axios from "axios"
import toast from 'react-hot-toast';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import { uploadToCloudinary } from '../utils/uploadOnCloudinary.js';

export default function Register() {


const stars = [0,1,2,3,4];

const navigate = useNavigate()

// Form Fields 

// Applicant Data
const [ name , setName] = useState("");
const [father_name , setFatherName] = useState("");
const [religion , setReligion] = useState("")
const [contact , setContact] = useState("Muslim");
const [cnic , setCnic]  = useState("");
const [photo , setPhoto] = useState({});
const [cnicPic , setCnicPic] = useState({});
// console.log(name , father_name  ,religion , contact , cnic , photo , cnicPic);
console.log(photo);


// Work Data 
const [post  , setPost] = useState("Student")
const [work_place , setWorkPlace] = useState("")
const [office_contact , setOfficeContact]  = useState("")
// console.log(post , work_place , office_contact);

// Relatives Data
const [relative1_name , setRelative1Name] = useState("")
const [relative1_relation , setRelative1Relation]= useState("");
const [relative1_contact , setRelative1Contact] = useState("");
const [relativeOneCnicPic , setRelative1CnicPic]  = useState({})

// optional
const [relative2_name , setRelative2Name] = useState("")
const [relative2_relation , setRelative2Relation]= useState("");
const [relative2_contact , setRelative2Contact] = useState("");
const [relativeTwoCnicPic , setRelative2CnicPic] = useState({})

// console.log(relative1_name , relative1_relation , relativeOneCnicPic , relativeTwoCnicPic,relative1_contact  , relative2_name , relative2_relation , relative2_contact );
const [ loading , setLoading ] = useState(false);

// files Validation states

const submit = async  (e)=>{

  e.preventDefault();
// Validation
if (!photo || !(photo instanceof File)) {
  toast.error("Member Photo is Required");
  return;
}

if (!cnicPic || !(cnicPic instanceof File)) {
  toast.error("Member CNIC Picture is Required");
  return;
}
if (!relativeOneCnicPic || !(relativeOneCnicPic instanceof File)) {
  toast.error("Relative A. CNIC is Required :)");
  return;
}
try {
  setLoading(true)
const photoURL = await uploadToCloudinary(photo);
const cnicPicURL = await uploadToCloudinary(cnicPic);
const relativeOneCnicPicURL = await uploadToCloudinary(relativeOneCnicPic); 
const relativeTwoCnicPicURL =await uploadToCloudinary(relativeTwoCnicPic);

console.log("photo" , photoURL);
console.log("Cnic" , cnicPicURL);
console.log("reOneCnic" , relativeOneCnicPicURL);
console.log("r2CniURL" ,relativeTwoCnicPicURL);


const formData = new FormData();
formData.append("name" , name)
formData.append("father_name" , father_name)
formData.append("religion" , religion)
formData.append("contact" , contact)
formData.append("cnic" , cnic)
formData.append("photo" ,photoURL )
formData.append("cnicPic", cnicPicURL)

// Work Data 
formData.append("post", post)
formData.append("work_place", work_place)
formData.append("office_contact", office_contact)

// Relatives Data
formData.append("relative1_name", relative1_name)
formData.append("relative1_relation" , relative1_relation)
formData.append("relative1_contact",relative1_contact )
formData.append( "relativeOneCnicPic" , relativeOneCnicPicURL )

// optional
formData.append("relative2_name" ,relative2_name )  
formData.append("relative2_relation" , relative2_relation)
formData.append("relative2_contact" ,relative2_contact)
formData.append("relativeTwoCnicPic" , relativeTwoCnicPicURL)

// https://almasroor-server.vercel.app
const response =  await axios.post(
  `https://almasroor-server786.vercel.app/member/register`
  // `http://localhost:4000/member/register`

    , formData , {
  withCredentials : true,
  headers:{
    "Content-Type":"multipart/form-data"
  }
})

const data = await response.data;
console.log(data);
if(data){
  toast.success(`Dear ${data.data.name} You Are Registered Success Fully !!`)
  navigate("/#members-section")

}
  } catch (error){ 
    console.log("Member NoT Registered :)", error);
    if(error.response.data.message){
      toast(error.response.data.message)
    }else{
      console.log(error.response.data.message);
    }
    
  }finally{
    setLoading(false)
  }


}

return (<>

<div className="min-h-screen h-auto w-full pb-12 bg-black">
{/* Logo */}

<Logo/>

<h1 className='text-halfYellow font-arboret  text-center text-2xl md:text-4xl font-[200] uppercase  md:my-4' >registeration form</h1>


<form onSubmit={submit} className=" min-h-96 w-[90%] md:w-[550px] font-abhyalibre font-[700] mx-auto border border-halfYellow p-4 rounded-sm text-white mt-4  ">

<h1 className='text-halfYellow font-arboret  text-2xl md:text-2xl font-[200] uppercase ' >Applicant data</h1>
<ApplicantData name={name} setName={setName} father_name= {father_name} setFatherName={setFatherName} religion = {religion} setReligion={setReligion} contact= {contact} setContact = {setContact} cnic={cnic} setCnic={setCnic} setCnicPic={setCnicPic} cnicPic ={cnicPic} setPhoto = {setPhoto}  photo={photo} />

<h1 className='text-halfYellow font-arboret  text-xl md:text-2xl font-[200] uppercase mt-5 ' >Institue/Employment Data</h1>
<InstitueData post={post} setPost ={setPost} work_place ={work_place} setWorkPlace ={setWorkPlace} office_contact ={office_contact} setOfficeContact= {setOfficeContact} />

<h1 className='text-halfYellow font-arboret  text-xl md:text-2xl font-[200] uppercase mt-5 ' >Relatives Data</h1>

<RelativesData relative1_name={relative1_name} setRelative1Name ={setRelative1Name} relative1_relation = {relative1_relation} setRelative1Relation= {setRelative1Relation} relative1_contact ={relative1_contact} setRelative1Contact= {setRelative1Contact} relativeOneCnicPic ={relativeOneCnicPic} setRelative1CnicPic = {setRelative1CnicPic} relative2_name ={relative2_name} setRelative2Name ={setRelative2Name} relative2_relation = {relative2_relation} setRelative2Relation = {setRelative2Relation} relative2_contact ={relative2_contact} setRelative2Contact = {setRelative2Contact} relativeTwoCnicPic ={relativeTwoCnicPic} setRelative2CnicPic = {setRelative2CnicPic}  />

{/* Submit Form */}
<div className=" mt-4 flex justify-center text-center ">
<button type='submit' className='bg-appYellow w-[300px] py-1 text-xl flex justify-center items-center md:text-2xl rounded-md hover:opacity-90' >
  {
    loading?
<span className='submit-loading h-[30px] w-[30px] border-halfBlack border-[3px]' ></span>
:
<span>Submit</span>
  }

  </button>
</div>

</form>
  </div>
</>)
}

function ApplicantData({ name , setName , father_name  , setFatherName , religion , photo, setReligion , contact , setContact ,cnic ,  setCnic ,setPhoto , cnicPic , setCnicPic }) {
const [cnicName , setCnicName] = useState(null)

    const cnicRef = useRef("");
    const photRef = useRef("");
    const [photoPreview , setShowPreview] = useState("");

 const handleFileChange = (e)=>{

      const file  = e.target?.files[0]
    setPhoto(file)
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = ()=>{
        setShowPreview(fileReader.result);
      }
    }

const handleFileChange2 = (e)=>{

setCnicPic(e.target.files[0])  
  setCnicName(e.target.files[0].name)
 
}


const CNICValidation = (cnicInput) => {
  let cleanedCnic = cnicInput.replace(/\D/g, "");
  let formattedCnic = cleanedCnic;

  if (cleanedCnic.length > 5 && cleanedCnic.length <= 12) {
    formattedCnic = cleanedCnic.slice(0, 5) + '-' + cleanedCnic.slice(5, 12);
  } else if (cleanedCnic.length > 12) {
    formattedCnic = cleanedCnic.slice(0, 5) + '-' + cleanedCnic.slice(5, 12) + '-' + cleanedCnic.slice(12, 13);
  }
  setCnic(formattedCnic);
};

 return(<>
  <div className=" flex-col md:flex-row flex gap-1">

{/* text fields portion  60% */}
<div className=" w-full md:w-[60%] mt-5">


<div className="flex w-full gap-1 items-center mt-2">
  <label
    className="font-abhyalibre grow-0 shrink-0 flex-0  text-[15px]  font-[700]"
    htmlFor=""
  >
    Name Of Applicant
  </label>
  <input
    required
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="grow bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
    type="text"
  />
</div>

<div className="flex w-full gap-1 justify-between items-center mt-2">

  <label className='font-abhyalibre] grow-0  shrink-0 flex-0 font-[700] text-[20px] md:text-xl' htmlFor="">Father Name </label>
  <input required value={father_name} onChange={(e)=>setFatherName(e.target.value)}
  className=" grow   bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
</div>

<div className="flex w-full gap-1 justify-between items-center mt-2">
  <label className='font-abhyalibre  grow-0 shrink-0 flex-0 font-[700] text-[20px] md:text-xl' htmlFor="">Contat No</label>
  <input required  value={contact} onChange={(e)=>setContact(e.target.value)}
  className=" grow bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="number"
  min={0}
/>
</div>



<div className="flex w-full gap-1 justify-between items-center mt-2">

  <label className='font-abhyalibre  grow-0 shrink-0 flex-0 font-[700] text-[20px] md:text-xl' htmlFor="">CNIC/B.Form </label>
  <input  value={cnic} onChange={(e)=>CNICValidation(e.target.value)}
 required  className="grow bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
</div>

{/* upload Fields */}
<div key={"Memeber_cnic"} className="mt-2 w-full">
<div onClick={()=>{ cnicRef.current.click() }} className={`bg-halfBlack w-ful  cursor-pointer flex justify-between items-center text-[23px] md:text-xl px-2 md:px-4 hover:opacity-90 rounded-2xl pt-[2px] md:py-1 `}>
{
  cnicName && cnicPic ?
  (<>
<input  className='bg-halfBlack h-[90%] border-none outline-none ml-2' value={cnicName} readOnly type='text' />   
  </>)
  // cnicName
  :
  (<>
    <span  >
  upload cnic
  {/* when Field is loaded thed shows the file name */}
  </span>
  <i class="fa-solid fa-arrow-up-from-bracket mb-1 text-[20px] "></i>
  </>)
}

</div>
<input  onChange={handleFileChange2} ref={cnicRef} className='hidden' type="file" />
</div>


{/* Select  */}

<div className="mt-3">
<select

  required
  className="bg-halfBlack w-full cursor-pointer text-[20px] md:text-xl px-4 hover:opacity-90 rounded-2xl py-1"
  name=""
  id=""
  value={religion} onChange={(e)=>setReligion(e.target.value)}
>
  <option disabled className="text-sm md:text-base" value="">Religion</option>
  <option className="text-sm md:text-base" value="muslim">Muslim</option>
  <option className="text-sm md:text-base" value="Hindu">Hindu</option>
  <option className="text-sm md:text-base" value="Christian">Christian</option>
  <option className="text-sm md:text-base" value="Sikh">Sikh</option>
  <option className="text-sm md:text-base" value="Buddhist">Buddhist</option>
  <option className="text-sm md:text-base" value="Other">Other</option>
</select>

</div>

</div>

{/* file field portion  40% */}
<div key={"Memeber_photo"} className="  w-full md:w-[40%] flex justify-center items-start md:mt-5 mt-3 md:items-center ">

<div onClick={()=>{ photRef.current.click()}} className={`h-[200px] w-[150px]  hover:opacity-80 cursor-pointer bg-halfBlack rounded-2xl flex justify-center items-center flex-col gap-2 `}>

{
  photoPreview ? 
  <figure>
<img className='h-[195px] w-[150px]  rounded-2xl' src={photoPreview? photoPreview :""} alt="" />
</figure>
:
<div className='h-[200px] w-[150px] flex justify-center items-center flex-col gap-2' >
<span className='text-xl text-[#ffffffab]' >Photo</span>
<i class="fa-solid fa-arrow-up-from-bracket text-3xl "></i> 
</div>
}



</div>
<input onChange={handleFileChange} type="file" className='hidden' ref={photRef} />

</div>



</div>
  </>)
}

function InstitueData({post  ,setPost , work_place , setWorkPlace, office_contact , setOfficeContact}) {



  return(<>
<div className=" text-xl mt-3 ">

  <div className=" flex md:flex-row md:items-center flex-col gap-1">

    <div  >

  <label className='text-[18px] grow-0 shrink-0 flex-0 md:text-[16px]' htmlFor=""> I am </label>

  <select value={post} required onChange={(e)=>setPost(e.target.value)} className='bg-halfBlack grow  px-2 py-1 text-[17px] md:text-base rounded-2xl' name="" id="">


    
    <option className="text-sm md:text-base" defaultValue={"Student"} value="Student">Student</option>
  <option className="text-sm md:text-base" value="Doctor">Doctor</option>
  <option className="text-sm md:text-base" value="Engineer">Engineer</option>
  <option className="text-sm md:text-base" value="Teacher">Teacher</option>
  <option className="text-sm md:text-base" value="Lawyer">Lawyer</option>
  <option className="text-sm md:text-base" value="Businessperson">Businessperson</option>
  <option className="text-sm md:text-base" value="Accountant">Accountant</option>
  <option className="text-sm md:text-base" value="SoftwareDeveloper">Software Developer</option>
  </select>
    </div>

    <div className='flex gap-1 mt-2' >


<p className='text-[18px] md:text-[20px] grow-0 shrink-0 flex-0 mt-1' > {post=== "Student"? "Studied At":"Worked At"} </p>
<input required value={work_place} onChange={(e)=>setWorkPlace(e.target.value)}
  className="grow bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
  </div>
</div>
  
<div className='flex w-full  gap-1 mt-2' >
  
<p className='text-[15px] grow-0 shrink-0 flex-0 md:text-xl'>{ post=== "Student"?"Institue":"Office" } Contact</p>

<input required value={office_contact} onChange={(e)=>setOfficeContact(e.target.value)}

  className="grow bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="number"
  min={0}
/>

  </div>

  </div>  
  </>)
  
}

function RelativesData({ 
  relative1_name, 
  relative1_relation, 
  relative1_contact, 
  relativeOneCnicPic, 
  setRelative1Name, 
  setRelative1Contact, 
  setRelative1Relation, 
  setRelative1CnicPic,
  relative2_name, 
  relative2_relation, 
  relative2_contact, 
  relativeTwoCnicPic, 
  setRelative2Name, 
  setRelative2Contact, 
  setRelative2Relation, 

  setRelative2CnicPic 
}) {
  const [cnic1, setCnic1] = useState("");
  const [cnic2, setCnic2] = useState("");

  const realtive1fileRef = useRef("");
  const realtive2fileRef = useRef("");

  return (
    <div>
      {/* Relative A */}
      <fieldset className="border border-[#B89F80] rounded-sm p-2">
        <legend className="font-arboret text-xl md:text-xl font-[200] uppercase text-[rgba(255,255,255,0.61)]">
          Relative A
        </legend>

        <div className="flex md:flex-row gap-2 flex-col">

          <div className="md:w-1/2 gap-1 flex w-full items-center">

            <label className="font-abhyalibre text-[18px] md:text-xl grow-0 shrink-0 flex-0 font-[700]">
              Name
            </label>
            <input
              required
              value={relative1_name}
              onChange={(e) => setRelative1Name(e.target.value)}
              className="grow bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
              type="text"
            />
          </div>

          <select
            required
            value={relative1_relation}
            onChange={(e) => setRelative1Relation(e.target.value)}
            className="bg-halfBlack px-2 md:w-1/2 w-full text-[23px] md:text-xl md:px-4 md:mt-0 mt-3 rounded-2xl"
          >
            <option className="text-sm md:text-base" disabled value="">
              Relation
            </option>
            <option className="text-sm md:text-base" value="Father">
              Father
            </option>
            <option className="text-sm md:text-base" value="Brother">
              Brother
            </option>
          </select>
        </div>

        <div className="flex md:flex-row gap-2 flex-col mt-2">

          <div className="md:w-1/2 gap-1 flex w-full mt-2 items-center">
            <label className="font-abhyalibre text-[18px] md:text-xl grow-0 shrink-0 flex-0font-[700]">
              Contact
            </label>
            <input
              required
              value={relative1_contact}
              onChange={(e) => setRelative1Contact(e.target.value)}
              className="grow bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
              type="number"
            />
          </div>

          <div
          key={"relavtvi2__cnic"}
            onClick={() => {
              realtive1fileRef.current.click();
            }}
            className={`md:w-1/2 mt-2 flex w-full bg-halfBlack px-2 rounded-2xl items-center justify-between cursor-pointer py-1`}
          >
            {cnic1  ? (
              <input
                className="bg-halfBlack h-[90%] border-none outline-none ml-2"
                value={cnic1}
                readOnly
                type="text"
              />
            ) : (
              <>
                <span>upload cnic</span>
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </>
            )}
            <input
              onChange={(e) => {
                setCnic1(e.target.files[0].name);
                setRelative1CnicPic(e.target.files[0]);
              }}
              ref={realtive1fileRef}
              className="hidden"
              type="file"
            />
          </div>
        </div>
      </fieldset>

      {/* Relative B */}
      <fieldset className="border border-[#B89F80] rounded-sm p-2 mt-2">
        <legend className="font-arboret text-xl md:text-[18px] font-[200] uppercase text-[rgba(255,255,255,0.61)]">
          Relative B <span className="italic">(optional)</span>
        </legend>

        <div className="flex md:flex-row gap-2 flex-col">
          <div className="md:w-1/2 flex w-full items-center">
            <label className="font-abhyalibre text-[18px] md:text-xl grow-0 shrink-0 flex-0font-[700]">
              Name
            </label>
            <input
              value={relative2_name}
              onChange={(e) => setRelative2Name(e.target.value)}
              className="grow bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
              type="text"
            />
          </div>

          <select
            value={relative2_relation}
            onChange={(e) => setRelative2Relation(e.target.value)}
            className="bg-halfBlack px-2 md:w-1/2 w-full text-[23px] md:text-xl md:px-4 md:mt-0 mt-3 rounded-2xl"
          >
            <option className="text-sm md:text-base" value="">
              Relation
            </option>
            <option className="text-sm md:text-base" value="Father">
              Father
            </option>
            <option className="text-sm md:text-base" value="Brother">
              Brother
            </option>
          </select>

        </div>

        <div className="flex md:flex-row gap-2 flex-col mt-3">
          <div className="md:w-1/2 flex w-full items-center">
            <label className="font-abhyalibre text-[18px] md:text-xl grow-0 shrink-0 flex-0 font-[700]">
              Contact
            </label>
            <input
              value={relative2_contact}
              onChange={(e) => setRelative2Contact(e.target.value)}
              className="grow bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
              type="number"
            />
          </div>

          <div
          key={"relative1_cnic"}
            onClick={() => {
              realtive2fileRef.current.click();
            }}
            className={`md:w-1/2 mt-2 flex w-full bg-halfBlack px-2 rounded-2xl items-center justify-between cursor-pointer py-1`}
          >
            {cnic2 ? (
              <input
                className="bg-halfBlack h-[90%] border-none outline-none ml-2"
                value={cnic2}
                readOnly
                type="text"
              />
            ) : (
              <>
                <span>upload cnic</span>
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </>
            )}
            <input
              onChange={(e) => {
                setCnic2(e.target.files[0].name);
                setRelative2CnicPic(e.target.files[0]);
              }}
              ref={realtive2fileRef}
              className="hidden"
              type="file"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}
