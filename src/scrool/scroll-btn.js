import React, { useEffect, useState } from 'react';
import './scroll-btn.css'


const ScrollBtn = () => {

    const[visible, setvisible]=useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', togglescreen);
        return()=>(
            window.removeEventListener('scroll', togglescreen)
        )
    },[])

    const togglescreen=()=>{
        if(window.pageYOffset > 300){
            setvisible(true)
        }
        else{
            setvisible(false)
        }
    }

    const ScrollTopBottom =()=>{
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            }
        )
    }

    // Whatsapp controll

   
    const handlewhatsapp=()=>{

        const number = '8189891619';
        const message ='Hello, I would like to know more about your services!';
        const whatsappinfo = ` https://wa.me/${number}?text=${message}`;

        window.open(whatsappinfo, '_blank')
    }



    

    return (
        <div className='scroll-top-to-bottom'>

        {/* scroll buttton */}

        {visible && (
            <div className='scroll-button' onClick={ScrollTopBottom}>
                <img src={'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22url(%23a)%22%20fill-rule%3D%22evenodd%22%20d%3D%22M11.4697%207.46967C11.7626%207.17678%2012.2374%207.17678%2012.5303%207.46967L15.5303%2010.4697C15.8232%2010.7626%2015.8232%2011.2374%2015.5303%2011.5303C15.2374%2011.8232%2014.7626%2011.8232%2014.4697%2011.5303L12.75%209.81066V16C12.75%2016.4142%2012.4142%2016.75%2012%2016.75C11.5858%2016.75%2011.25%2016.4142%2011.25%2016V9.81066L9.53033%2011.5303C9.23744%2011.8232%208.76256%2011.8232%208.46967%2011.5303C8.17678%2011.2374%208.17678%2010.7626%208.46967%2010.4697L11.4697%207.46967Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill%3D%22url(%23b)%22%20fill-rule%3D%22evenodd%22%20d%3D%22M12%202.75C10.3139%202.75%208.73533%203.20043%207.37554%203.98703C7.017%204.19443%206.5582%204.07191%206.3508%203.71337C6.14339%203.35482%206.26591%202.89602%206.62446%202.68862C8.2064%201.77351%2010.0432%201.25%2012%201.25C17.9371%201.25%2022.75%206.06294%2022.75%2012C22.75%2017.9371%2017.9371%2022.75%2012%2022.75C6.06294%2022.75%201.25%2017.9371%201.25%2012C1.25%2010.0432%201.77351%208.2064%202.68862%206.62446C2.89602%206.26591%203.35482%206.14339%203.71337%206.3508C4.07191%206.5582%204.19443%207.017%203.98703%207.37554C3.20043%208.73533%202.75%2010.3139%202.75%2012C2.75%2017.1086%206.89137%2021.25%2012%2021.25C17.1086%2021.25%2021.25%2017.1086%2021.25%2012C21.25%206.89137%2017.1086%202.75%2012%202.75Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%221.25%22%20y2%3D%2222.75%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23854D9C%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23CD4ED3%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%221.25%22%20y2%3D%2222.75%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23854D9C%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23CD4ED3%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E'} alt='topbutton' className='arrow-up' width={50}/>
            </div>
        )}

        {/* whatsapp button */}

        <div className='whatsapp-button' onClick={handlewhatsapp}>
            <img src={'https://www.svgrepo.com/show/452133/whatsapp.svg'} alt='whatsapp'  className='whatsapp-icon' width={53}/>
        </div>


        
            
        </div>
    );
}

export default ScrollBtn;
