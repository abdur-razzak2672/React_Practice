import React from 'react'
import image1 from './courses/LEVEL1.png'
import image2 from './courses/LEVEL2.png'
import image3 from './courses/LEVEL3.png'
import image4 from './courses/LEVEL4.png'
import image5 from './courses/LEVEL5.png'
import svg1 from './courses/1.svg'
import svg2 from './courses/2.svg'
import svg3 from './courses/3.svg'
import svg4 from './courses/5.svg'
import svg5 from './courses/6.svg'

const courses = () => {
    return (
        <div className = "courses">
            <section class=" ">
                <h1 class="text-center text-white mb-5">The Most Innovative Curriculum to make your child smart in Technology + Maths
                (Using Coding Techniques)</h1>
                <nav class="text-center  ">
                    <div class="container">
                        <a class="btn bg-white" href="#grade1-2">Grader 1-3</a>
                        <a class="btn bg-white" data-toggle="collapse" href="#grade3-5" role="button" aria-expanded="true" aria-controls="grade3-5">Grade 3-6</a>
                        <a class="btn bg-white" href="#grade3-5">Grade 7</a>
                    </div>
                </nav>
            </section> 

            <section class="p-5  " id="grade1-3">
                <div class="row text-center g-4">
                    <div class="col-md-4">
                        <img src = {svg1} alt = ""></img> 
                        <div class="card text-dark"> 
                            <img src = {image1} alt = ""></img> 
                        </div>
                        </div>
                    <div class="col-md-4">
                        <img src = {svg2} alt = ""></img> 
                        <div class="card text-dark"> 
                            <img src = {image2} alt = ""></img> 
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src = {svg3} alt = ""></img> 
                        <div class="card text-dark"> 
                            <img src = {image3} alt = ""></img> 
                            
                        </div>
                    </div>
                </div>
            </section>

            <section class="collapse" id="grade3-5">
                <div class="row text-center g-4">
                    <div class="col-md-4">
                        <img src = {svg4} alt = ""></img> 
                        <div class="card text-dark"> 
                            <img src = {image4} alt = ""></img> 
                        </div>
                        
                    </div>
                    <div class="col-md-4">
                        <img src = {svg5} alt = ""></img> 
                        <div class="card text-dark"> 
                            <img src = {image5} alt = ""></img> 
                        </div>
                    </div>
                    <div class="col-md">
                        <img src = {svg5} alt = ""></img> 
                        <div class="card text-dark"> 
                        </div>
                    </div>
                </div>
            </section>
                    
        </div>
    )
}

export default courses ;
