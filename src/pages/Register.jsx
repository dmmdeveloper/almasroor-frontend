import React, { useRef, useState } from 'react'

export default function Register() {

const stars = [0,1,2,3,4];

// Form Fields 

// Applicant Data
const [ name , setName] = useState("");
const [father_name , setFatherName] = useState("");
const [religion , setReligion] = useState("")
const [contact , setContact] = useState("Muslim");
const [cnic , setCnic]  = useState("");
const [photo , setPhoto] = useState(null);
const [cnicPic , setCnicPic] = useState(null)
// console.log(name , father_name  ,religion , contact , cnic , photo , cnicPic);


// Work Data 
const [post  , setPost] = useState("Student")
const [work_place , setWorkPlace] = useState("")
const [office_contact , setOfficeContact]  = useState("")
// console.log(post , work_place , office_contact);



// Relatives Data
const [relative1_name , setRelative1Name] = useState("")
const [relative1_relation , setRelative1Relation]= useState("");
const [relative1_contact , setRelative1Contact] = useState("");
const [relativeOneCnicPic , setRelative1CnicPic]  = useState(null)

// optional
const [relative2_name , setRelative2Name] = useState("")
const [relative2_relation , setRelative2Relation]= useState("");
const [relative2_contact , setRelative2Contact] = useState("");
const [relativeTwoCnicPic , setRelative2CnicPic] = useState(null)


console.log(relative1_name , relative1_relation , relativeOneCnicPic , relativeTwoCnicPic,relative1_contact  , relative2_name , relative2_relation , relative2_contact );






return (<>

<div className="min-h-screen h-auto w-full pb-12 bg-black">
{/* Logo */}

<div className="h-[90px] pl-5 md:pl-0 md:h-[110px] full select-none md:w-full flex justify-center items-center pt-3  md:pt-5 flex-col ">


{/* stars */}

<div className=" flex items-center  gap-1 relative top-3 ">
{
    stars.map((_,i)=>{
        return(<>
        <span  className='clipy-star md:h-[25px] md:w-[25px] h-[20px] w-[20px] ' ></span>
        </>)
    })
}
</div>
{/* name */}
<div className="">
    <h1 className='text-center font-sans text-appWhite md:text-[40px] text-[33px] uppercase' >Al masroor </h1>
    <h2 className='text-white6 md:text-[28px] text-[23px] font-arboret font-[200] md:font-[100] text-center relative md:bottom-5 bottom-4 ' >Royal Hostel Larkana</h2>
</div>


</div>

<h1 className='text-halfYellow font-arboret  text-center text-2xl md:text-4xl font-[200] uppercase  md:my-4' >registeration form</h1>

<form className=" min-h-96 w-[90%] md:w-[550px] font-abhyalibre font-[700] mx-auto border border-halfYellow p-4 rounded-sm text-white mt-4  ">

<h1 className='text-halfYellow font-arboret  text-2xl md:text-2xl font-[200] uppercase ' >Applicant data</h1>
<ApplicantData name={name} setName={setName} father_name= {father_name} setFatherName={setFatherName} religion = {religion} setReligion={setReligion} contact= {contact} setContact = {setContact} cnic={cnic} setCnic={setCnic} setCnicPic={setCnicPic} cnicPic ={cnicPic} setPhoto = {setPhoto}  />

<h1 className='text-halfYellow font-arboret  text-xl md:text-2xl font-[200] uppercase mt-5 ' >Institue/Employment Data</h1>
<InstitueData post={post} setPost ={setPost} work_place ={work_place} setWorkPlace ={setWorkPlace} office_contact ={office_contact} setOfficeContact= {setOfficeContact} />

<h1 className='text-halfYellow font-arboret  text-xl md:text-2xl font-[200] uppercase mt-5 ' >Relatives Data</h1>

<RelativesData relative1_name={relative1_name} setRelative1Name ={setRelative1Name} relative1_relation = {relative1_relation} setRelative1Relation= {setRelative1Relation} relative1_contact ={relative1_contact} setRelative1Contact= {setRelative1Contact} relativeOneCnicPic ={relativeOneCnicPic} setRelative1CnicPic = {setRelative1CnicPic} relative2_name ={relative2_name} setRelative2Name ={setRelative2Name} relative2_relation = {relative2_relation} setRelative2Relation = {setRelative2Relation} relative2_contact ={relative2_contact} setRelative2Contact = {setRelative2Contact} relativeTwoCnicPic ={relativeTwoCnicPic} setRelative2CnicPic = {setRelative2CnicPic}  />

{/* Submit Form */}
<div className=" mt-4 text-center ">
<button type='submit' className='bg-appYellow w-[300px] py-1 text-xl md:text-2xl rounded-md hover:opacity-90' >Read Terms & Conditions</button>
</div>

</form>
  </div>
</>  )
}

function ApplicantData({ name , setName , father_name  , setFatherName , religion , setReligion , contact , setContact ,cnic ,  setCnic ,setPhoto , cnicPic , setCnicPic }) {

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


  return(<>
  <div className=" flex-col md:flex-row flex gap-1">

{/* text fields portion  60% */}
<div className=" w-full md:w-[60%] mt-5">



<div className="flex w-full items-center mt-2 ">

  <label className='font-abhyalibre w-[50%] text-[18px] md:text-xl md:w-[60%] flex-2 font-[700]  ' htmlFor="">Name Of Applicant</label>
  <input required value={name} onChange={(e)=>setName(e.target.value)}
  className="w-[50%] md:w-[40%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
</div>


<div className="flex w-full justify-between items-center mt-2">



  <label className='font-abhyalibre w-[40%] md:w-[35p%]  flex-1 font-[700] text-[20px] md:text-xl' htmlFor="">Father Name </label>
  <input required value={father_name} onChange={(e)=>setFatherName(e.target.value)}
  className=" w-[60%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
</div>


<div className="flex w-full justify-between items-center mt-2">



  <label className='font-abhyalibre w-[30%] md:w-[30%] flex-2 font-[700] text-[20px] md:text-xl' htmlFor="">Contat No</label>
  <input required  value={contact} onChange={(e)=>setContact(e.target.value)}
  className=" w-[70%] md:w-[70%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="number"
  min={0}
/>
</div>

<div className="flex w-full justify-between items-center mt-2">


  <label className='font-abhyalibre  w-[40%] md:w-[40%] font-[700] text-[20px] md:text-xl' htmlFor="">CNIC/B.Form </label>
  <input  value={cnic} onChange={(e)=>setCnic(e.target.value)}
 required  className="md:w-[60%] w-[60%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
</div>

{/* upload Fields */}
<div className="mt-2 w-full">
<div onClick={()=>{ cnicRef.current.click() }} className='bg-halfBlack w-full cursor-pointer flex justify-between items-center text-[23px] md:text-xl px-2 md:px-4 hover:opacity-90 rounded-2xl pt-[2px] md:py-1'>
{
  cnicName && cnicPic ?
  (<>
<input  required className='bg-halfBlack h-[90%] border-none outline-none ml-2' value={cnicName} readOnly type='text' />   
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
<input required  onChange={handleFileChange2} ref={cnicRef} className='hidden' type="file" />
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
  <option className="text-sm md:text-base"  defaultValue={"Muslim"} value="muslim">Muslim</option>
  <option className="text-sm md:text-base" value="Hindu">Hindu</option>
  <option className="text-sm md:text-base" value="Christian">Christian</option>
  <option className="text-sm md:text-base" value="Sikh">Sikh</option>
  <option className="text-sm md:text-base" value="Buddhist">Buddhist</option>
  <option className="text-sm md:text-base" value="Other">Other</option>
</select>


</div>




</div>


{/* file field portion  40% */}
<div className="  w-full md:w-[40%] flex justify-center items-start md:mt-5 mt-3 md:items-center ">



<div onClick={()=>{ photRef.current.click()}} className="h-[200px] w-[150px]  hover:opacity-80 cursor-pointer bg-halfBlack rounded-2xl flex justify-center items-center flex-col gap-2 ">

{
  photoPreview ? 

  <figure>
<img className='h-[200px] w-[150px]  rounded-2xl' src={photoPreview? photoPreview :""} alt="" />
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

  <div className=" flex md:flex-row md:items-center flex-col gap-2">

    <div  >
  <label className='text-[18px] md:text-xl' htmlFor=""> I am </label>

  <select value={post} required onChange={(e)=>setPost(e.target.value)} className='bg-halfBlack px-2 rounded-2xl' name="" id="">

    <option defaultValue={"Student"} value="Student">Student</option>
    <option value="Employee">Employee</option>
  </select>
    </div>

    <div className='flex gap-1 mt-1' >

<p className='text-[18px] md:text-xl w-[30%] mt-1' > {post=== "Student"? "Studied At":"Worked At"} </p>
<input required value={work_place} onChange={(e)=>setWorkPlace(e.target.value)}
  className="w-[60%]  bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
  </div>
</div>
  
<div className='flex gap-1 mt-2' >
<p className='w-[50%] md:w-[30%] text-[18px] md:text-xl ' >{ post=== "Student"?"Institue":"Office" } Contact</p>
<input required value={office_contact} onChange={(e)=>setOfficeContact(e.target.value)}
  className="w-[40%] md:w-[55%]  bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="number"
  min={0}
/>
  </div>

  </div>  
  </>)
  
}


function RelativesData({ relative1_name , relative1_relation , relative1_contact, relativeOneCnicPic ,   setRelative1Name , setRelative1Contact  , setRelative1Relation, setRelative1CnicPic ,relative2_name , relative2_relation , relative2_contact, relativeTwCnicPic  , setRelative2Name , setRelative2Contact  , setRelative2Relation,setRelative2CnicPic, }) {


const [cnic1  ,setCnic1] = useState("")
const [cnic2  ,setCnic2] = useState("")

  const realtive1fileRef = useRef("");
  const realtive2fileRef = useRef("");

  return(<>


<div className="">

<fieldset className='border border-[#B89F80] rounded-sm p-2' >
  <legend className=' font-arboret  text-xl md:text-xl font-[200] uppercase text-[rgba(255,255,255,0.61)]' >Relative A.</legend>


<div className="flex md:flex-row flex-col ">

  <div className='md:w-1/2 flex w-full  items-center' >
<label className='font-abhyalibre  text-[18px] md:text-xl flex-2 font-[700]  ' htmlFor="">Name </label>
  <input required value={relative1_name} onChange={(e)=>setRelative1Name(e.target.value)}
  className="w-full md:w-[70%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
  </div>

  <select required value={relative1_relation} onChange={(e)=>setRelative1Relation(e.target.value)}  className='bg-halfBlack px-2 md:w-1/2 w-full  text-[23px] md:text-xl  md:px-4 md:mt-0 mt-3 rounded-2xl' name="" id="">
    <option className="text-sm md:text-base"  disabled value="">Relation</option>
    <option className="text-sm md:text-base" value="Father">Father</option>
    <option className="text-sm md:text-base" value="Brother">Brother</option>
  </select>

</div>


<div className="flex md:flex-row flex-col mt-2 ">

  <div className='md:w-1/2 flex w-full  mt-2 items-center' >
<label className='font-abhyalibre  text-[18px] md:text-xl flex-2 font-[700]  ' htmlFor="">Contact </label>
  <input required value={relative1_contact} onChange={(e)=>setRelative1Contact(e.target.value)}
  className="w-full md:w-[70%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="number"/>
  </div>

  <div key={Math.random()} onClick={(e)=>{ realtive1fileRef.current.click()}} className="md:w-1/2 mt-2 flex w-full bg-halfBlack px-2 rounded-2xl items-center justify-between cursor-pointer py-1">
{
  cnic1 ?
<input className='bg-halfBlack h-[90%] border-none outline-none ml-2' value={cnic1} readOnly type='text' />   
  :
  (<>
      <span>upload cnic</span>
      <i class="fa-solid fa-arrow-up-from-bracket"></i>
  </>)
}
    <input onChange={(e)=>{setCnic1(e.target.files[0].name) ;setRelative1CnicPic(e.target.files[0]) }
    } ref={realtive1fileRef} className='hidden' type="file" />
  </div>

</div>

</fieldset>

<fieldset key={"field1"} className='border border-[#B89F80] rounded-sm p-2 mt-2 ' >

<legend className=' font-arboret  text-xl md:text-[18px] font-[200] uppercase text-[rgba(255,255,255,0.61)]' >Relative b <span className='italic' >(optional) </span>  .</legend>

<div className="flex md:flex-row flex-col ">
  <div className='md:w-1/2 flex w-full  items-center' >
<label className='font-abhyalibre  text-[18px] md:text-xl flex-2 font-[700]  ' htmlFor="">Name </label>
  <input value={relative2_name} onChange={(e)=>setRelative2Name(e.target.value)}
  className="w-full md:w-[70%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
  </div>
  <select value={relative2_relation} onChange={(e)=>setRelative2Relation(e.target.value)}   className="bg-halfBlack px-2 md:w-1/2 w-full  text-[23px] md:text-xl  md:px-4 md:mt-0 mt-3 rounded-2xl" name="" id="">

    <option className="text-sm md:text-base"  value="">Relation</option>
    <option className="text-sm md:text-base" value="Father">Father</option>
    <option className="text-sm md:text-base" value="Brother">Brother</option>
  </select>

</div>


<div className="flex md:flex-row flex-col mt-3 ">

  <div className='md:w-1/2 flex w-full  items-center' >
<label className='font-abhyalibre  text-[18px] md:text-xl flex-2 font-[700]  ' htmlFor="">Contact </label>
  <input value={relative2_contact} onChange={(e)=>setRelative2Contact(e.target.value)}
  className="w-full md:w-[70%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="number"/>
  </div>

  <div key={Math.random()} onClick={(e)=>{ realtive2fileRef.current.click()}} className="md:w-1/2 mt-2 flex w-full bg-halfBlack px-2 rounded-2xl items-center justify-between cursor-pointer py-1">
    {
      cnic2?
      <input className='bg-halfBlack h-[90%] border-none outline-none ml-2' value={cnic2} readOnly type='text' />   
:
      (<>
    <span>upload cnic</span>
    <i class="fa-solid fa-arrow-up-from-bracket"></i>      
      </>)
    }
    <input  onChange={(e)=>{setCnic2(e.target.files[0].name) ; setRelative2CnicPic(e.target.files[0])}} ref={realtive2fileRef} className='hidden' type="file" />
  </div>

</div>

</fieldset>

</div>


  </>)

  
}