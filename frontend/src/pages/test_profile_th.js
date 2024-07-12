import React from "react"
import { ReactDOM } from "react-dom"
import './profile_th'

const ImgUpload =({
    onChange,
    src
  })=>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img className="profile_img" for="photo-upload" src={src} />
      </div>
      <input classname="text_input"  id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  
  
  const Name =({
    onChange,
    value
  })=>
    <div className="field">
      <label htmlFor="name" className="form_label">
        ชื่อ:
      </label>
      <input 
        className="text_input"
        id="name" 
        type="text" 
        onChange={onChange} 
        maxlength="25" 
        value={value} 
        placeholder="เพ็ชรัตน์" 
        required/>
    </div>

const Last_Name =({
    onChange,
    value
  })=>
    <div className="field">
      <label htmlFor="name" className="form_label">
        สกุล:
      </label>
      <input 
        className="text_input"
        id="lastname" 
        type="text" 
        onChange={onChange} 
        maxlength="25" 
        value={value} 
        placeholder="สุริยะไชย" 
        required/>
    </div>
  
    
  const Email =({
    onChange,
    value
  })=>
    <div className="field">
      <label htmlFor="status" className="form_label">
        อีเมล:
      </label>
      <input 
        className="text_input"
        id="email" 
        type="text" 
        onChange={onChange} 
        maxLength="35" 
        value={value} 
        placeholder="xxxx@psu.ac.th" 
        required/>
    </div>
  
  
  const Profile =({
    onSubmit,
    src,
    name,
    lastname,
    email,
  })=>
    <div className="card" sx={{ marginLeft: {md:"18%"}}}>
      <form onSubmit={onSubmit} className="formprofile">
        <h1>โปรไฟล์</h1>
        <label className="custom-file-upload fas">
          <div className="img-wrap" >
            <img className="profile_img" for="photo-upload" src={src} />
          </div>
        </label>
        <div className="name">{name} {lastname}</div>
        <div className="email">{email}</div>
        <button sx={{ fontFamily: "Kanit" }} type="submit" className="edit">แก้ไขโปรไฟล์</button>
      </form>
    </div>
       
        
  const Edit =({
    onSubmit,
    children,
  })=>
    <div className="card">
      <form onSubmit={onSubmit} className="formprofile">
        <h1>โปรไฟล์</h1>
          {children}
        <button type="submit" className="save">บันทึก </button>
      </form>
    </div>
  
  class CardProfile extends React.Component {
    state = {
      file: '',
      imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
      name:'',
      status:'',
      active: 'edit'
    }
  
    photoUpload = e =>{
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file);
    }
    editName = e =>{
      const name = e.target.value;
      this.setState({
        name,
      });
    }
    
    editlastname = e => {
      const lastname = e.target.value;
      this.setState({
        lastname,
      });
    }

    editemail = e => {
        const email = e.target.value;
        this.setState({
          email,
        });
      }
    
    handleSubmit= e =>{
      e.preventDefault();
      let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
      this.setState({
        active: activeP,
      })
    }
    
    render() {
      const {imagePreviewUrl, 
             name, 
             lastname, 
             email,
             active} = this.state;
      return (
        <div>
          {(active === 'profile')?(
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
              <Name onChange={this.editName} value={name}/>
              <Last_Name onChange={this.editlastname} value={lastname}/>
              <Email onChange={this.editemail} value={email}/>
            </Edit>
          ):(
            <Profile 
            onSubmit={this.handleSubmit} 
            src={imagePreviewUrl} 
            name="เพ็ชรัตน์"
            lastname="สุริยะไชย" 
            email="petcharat.s@psu.ac.th"/>)}

          
        </div>
      )
    }
  }
  
//   ReactDOM.render(
//     <CardProfile/>,
//     document.getElementById('root')
//   )

export default CardProfile