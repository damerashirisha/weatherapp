import React from 'react'
// import Dataitem from './dataitem'
import Datalist from './datalist'

const Forcastitem = ({forcastdata}) => {
  console.log(forcastdata)
  const {dt,
  temp,
humidity,
speed,
weather:{icon,description}

}=forcastdata
//writing the day format
const day=new Date(dt*1000).toLocaleDateString('en-US',{weekday:'long'})
const items=[{
  
  src:'https://classroomclipart.com/image/content7/50871/thumb.gif',
  primary:`${temp.min.toFixed()}°`,//alt+0176-for degrees symbol
  secondary:`${temp.max.toFixed()}°`
},
{
  src:'https://c8.alamy.com/comp/RD1H24/humidity-vector-icon-for-personal-and-commercial-use-RD1H24.jpg',
  primary:`${humidity}%`,
},
{
  src:'https://cdn.dribbble.com/users/1405895/screenshots/3552152/nature_icon_windy_animated_blue.gif',
  primary:`${speed.toFixed()}m/s`,
},

]
  return (
    <div className="row  ">
    <div className="col-sm-6 mb-3 mb-sm-0 shadow" >
      <div className="card mx-2 my-2 "  style={{width:'200px'}} id='g1'>
        <div className="card-body">
          <h5 className="card-title text-center">{day}</h5>
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
          <p className='fw-bold'>{description}</p>
          <Datalist items={items} />
        </div>
      </div>
    </div>

  </div>
  )
}

export default  Forcastitem
