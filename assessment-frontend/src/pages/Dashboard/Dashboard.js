import React, { Component } from 'react';
import './dashboard.scss';
import Card from '../../atoms/Card';





class Dashboard extends Component {
    state= {
    tabClicked:'devices',
    devicesData:[],
    checked:false,
    usersData:[]
       
    };

    componentDidMount() {
    fetch('http://localhost:4000/api/devices.json')
    .then((res)=>res.json())
    .then(data=>{
        this.setState({
            devicesData:data.data
        })
        // console.log("data",data)
    }).catch(e=>{
        window.alert('Api not responding')
    })


    fetch('http://localhost:4000/api/users.json')
    .then((res)=>res.json())
    .then(data=>{
        this.setState({
            usersData:data.data
        })
        // console.log("data",data)
    }).catch(e=>{
        window.alert('Api not responding')
    })
    }


    toggleHandler=(state,index)=>{
       let devicesData=this.state.devicesData;
    //    console.log("tset",devicesData[index].attributes.state)
   if(   devicesData[index].attributes.state=='locked'){
    devicesData[index].attributes.state='unlocked'
   }else{
    devicesData[index].attributes.state='locked'
   }

   this.setState({
       devicesData:devicesData
   })
    }

   static getDerivedStateFromProps(nextProps, currentState) {
      
      
       
        
        return currentState;
    }


    render() {
        let options = {  month: 'long', day: 'numeric' };
    
        return (
            <div className="Dashboard-main-page">
                <div className="tab-div">
                    <div className={this.state.tabClicked=='devices' ? "tab-active" :"tab"} onClick={()=>{
                        this.setState({
                            tabClicked:'devices'
                        })
                    }} >Devices</div>
                    <div className={this.state.tabClicked=='users' ? "tab-active" :"tab"} onClick={()=>{
                        this.setState({
                            tabClicked:'users'
                        })
                    }} >Users</div>

                </div>



                {/* <Card className="main-card-body"

                heading={'Home'}
                subheading={'BG (LS-3i)'}
                
                />
          */}


          {
              this.state.tabClicked=="devices" ? <div className="devices-div"> 

              {
              this.state.devicesData.length &&  this.state.devicesData.map((item,index)=>{
                //   console.log('item',item)
                      return <Card className="main-card-body"

                heading={item.attributes.name}
                subheading={item.attributes.model_number}
                lockText={item.attributes.state}
                toggleHandler={()=>{
                    this.toggleHandler(item.attributes.state,index)
                }}
                checked={item.attributes.state=='locked' ? true : false}
                
                />
         

                 
                  })
              }

              </div>  : <div className="users-div">
         {
             this.state.usersData.length && this.state.usersData.map(item=>{
                 
              return <Card className="main-card-body"

              heading={item.attributes.name}
              subheading={item.attributes.email}
              subheading2={item.attributes.starts_at || item.attributes.ends_at ? `${new Date(item.attributes.starts_at).toLocaleDateString("en-US",options)}-${new Date(item.attributes.ends_at).toLocaleDateString("en-US",options)}` : ''}
              buttonText={item.attributes.starts_at || item.attributes.ends_at ? 'UPCOMING' : 'ACTIVE'}
              
              />
             })
         }

                   </div>
          }

         
               
            </div>
        );
    }
}




export default Dashboard
