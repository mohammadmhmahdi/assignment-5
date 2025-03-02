document.getElementById('completed-btn-1').addEventListener('click' , function(){
    let taskAssigned = document.getElementById('task-assigned');
    let taskText = parseInt(taskAssigned.innerText);
    let task = document.getElementById('complete-task');
    let completeTask = parseInt(task.innerText);
    let activity = document.getElementById('activity-log-1')
    if(taskText > 0){
        taskText--;
        taskAssigned.innerText = taskText;
        completeTask++;
        task.innerText = completeTask;
        alert('Board Updated Sucesfully');
        document.getElementById('completed-btn-1').disabled = true;
        activity.innerHTML = 
        `<p class="m-5 p-5 text-sm bg-blue-100 font-bold rounded-lg text-start">'You Have Complete The Task Fix Mobile Button Issue' <span id="real-time-1"></span> </p>`
        document.getElementById("real-time-1").innerText = new Date().toLocaleTimeString();
        document.getElementById('activity-log-1').style.display="block";

    }
    
})
document.getElementById('completed-btn-2').addEventListener('click' , function(){
    let taskAssigned = document.getElementById('task-assigned');
    let taskText = parseInt(taskAssigned.innerText);
    let task = document.getElementById('complete-task');
    let completeTask = parseInt(task.innerText);
    let activity = document.getElementById('activity-log-2')
    if(taskText > 0){
        taskText--;
        taskAssigned.innerText = taskText;
        completeTask++;
        task.innerText = completeTask;
        alert('Board Updated Sucesfully');
        document.getElementById('completed-btn-2').disabled = true;
        activity.innerHTML = 
        `<p class="m-5 p-5 text-sm bg-blue-100 font-bold rounded-lg text-start">'You Have Complete The Task Add Dark Mode' <span id="real-time-2"></span> </p>`
        document.getElementById("real-time-2").innerText = new Date().toLocaleTimeString();
        document.getElementById('activity-log-2').style.display="block";
    }
    
})
document.getElementById('completed-btn-3').addEventListener('click' , function(){
    let taskAssigned = document.getElementById('task-assigned');
    let taskText = parseInt(taskAssigned.innerText);
    let task = document.getElementById('complete-task');
    let completeTask = parseInt(task.innerText);
    let activity = document.getElementById('activity-log-3')
    if(taskText > 0){
        taskText--;
        taskAssigned.innerText = taskText;
        completeTask++;
        task.innerText = completeTask;
        alert('Board Updated Sucesfully');
        document.getElementById('completed-btn-3').disabled = true;
        activity.innerHTML = 
        `<p class="m-5 p-5 text-sm bg-blue-100 font-bold rounded-lg text-start">'You Have Complete The Task Optimize  Home page ' <span id="real-time-3"></span> </p>`
        document.getElementById("real-time-3").innerText = new Date().toLocaleTimeString();
        document.getElementById('activity-log-3').style.display="block";
    }
    
})
document.getElementById('completed-btn-4').addEventListener('click' , function(){
    let taskAssigned = document.getElementById('task-assigned');
    let taskText = parseInt(taskAssigned.innerText);
    let task = document.getElementById('complete-task');
    let completeTask = parseInt(task.innerText);
    let activity = document.getElementById('activity-log-4')
    if(taskText > 0){
        taskText--;
        taskAssigned.innerText = taskText;
        completeTask++;
        task.innerText = completeTask;
        alert('Board Updated Sucesfully');
        document.getElementById('completed-btn-4').disabled = true;    
        activity.innerHTML = 
        `<p class="m-5 p-5 text-sm bg-blue-100 font-bold rounded-lg text-start">'You Have Complete The Task Add new emoji 🤲' <span id="real-time-4"></span> </p>`
        document.getElementById("real-time-4").innerText = new Date().toLocaleTimeString();
        document.getElementById('activity-log-4').style.display="block";
    }
    
})
document.getElementById('completed-btn-5').addEventListener('click' , function(){
    let taskAssigned = document.getElementById('task-assigned');
    let taskText = parseInt(taskAssigned.innerText);
    let task = document.getElementById('complete-task');
    let completeTask = parseInt(task.innerText);
    let activity = document.getElementById('activity-log-5')
    if(taskText > 0){
        taskText--;
        taskAssigned.innerText = taskText;
        completeTask++;
        task.innerText = completeTask;
        alert('Board Updated Sucesfully');
        document.getElementById('completed-btn-5').disabled = true;
        activity.innerHTML = 
        `<p class="m-5 p-5 text-sm bg-blue-100 font-bold rounded-lg text-start">'You Have Complete The Task Integrate OpenAI API e' <span id="real-time-5"></span> </p>`
        document.getElementById("real-time-5").innerText = new Date().toLocaleTimeString();
        document.getElementById('activity-log-5').style.display="block";
    }
    
})
document.getElementById('completed-btn-6').addEventListener('click' , function(){
    let taskAssigned = document.getElementById('task-assigned');
    let taskText = parseInt(taskAssigned.innerText);
    let task = document.getElementById('complete-task');
    let completeTask = parseInt(task.innerText);
    let activity = document.getElementById('activity-log-6')
    if(taskText > 0){
        taskText--;
        taskAssigned.innerText = taskText;
        completeTask++;
        task.innerText = completeTask;
        alert('Board Updated Sucesfully');
        document.getElementById('completed-btn-6').disabled = true;
        activity.innerHTML = 
        `<p class="m-5 p-5 text-sm bg-blue-100 font-bold rounded-lg text-start">'You Have Complete The Task Improve Job searching ' <span id="real-time-6"></span> </p>`
        document.getElementById("real-time-6").textContent = new Date().toLocaleTimeString();
        document.getElementById('activity-log-6').style.display="block";
    }
    
})
document.getElementById('clear-history').addEventListener('click' , function(){
    document.getElementById('activity-log-1').style.display="none";
    document.getElementById('activity-log-2').style.display="none";
    document.getElementById('activity-log-3').style.display="none";
    document.getElementById('activity-log-4').style.display="none";
    document.getElementById('activity-log-5').style.display="none";
    document.getElementById('activity-log-6').style.display="none";
});
document.getElementById('q&a').addEventListener('click' , function(){
    window.location.href = "q&a.html"
});