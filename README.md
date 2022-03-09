# Password Generator Starter Code

    After reading the acceptance criteria I started by getting together a rough game a rough game plan of how to approach the task. I first determined how best to get the length of the password which was simple enough to accomplish and validate inputs.

    Next the four parameters of which characters the password was to be made of was a little more involved but after creatin the correct flow control and testing that the prompts were working correctly I moved on to the final step.

    Creating the code that was to be generated for the user required using the inputs gathered from the user in the previous step to then be used to programatically create the password.  I started from the end on this last step and thought it would be easiest to create a string for each one of the selected parameters and then one for the remaining length of the password selected by the user and then join them together to be return in the final step.

    I took the steps necessary to use control flow for the first four strings and then created a for loop to randomly generate the last string. It was at this point that I realized, through use of the console to log possible issues, that even though the prompts were functioning correctly the variables were not accesable globally even though I thought that using var to declare them would do so. So I moved all of the variables that I needed to be global to the beginning of the script and fixed any asscociated changes in the rest of it.

    After trouble shooting through these last steps I realized that I needed an additional return statement to get the password to the html element and that I needed to re initialize the combined list I was using so that if the user went to generate any additional passwords that they would match the character sets they chose.
    
    ![2022-03-09](https://user-images.githubusercontent.com/74988217/157542063-da13a2e3-b86a-4962-b027-311a0b3f6459.png)
