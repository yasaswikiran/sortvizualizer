let arr=[];
let cnt=0;
let n;
let array=document.getElementsByClassName('array')[0];
let swapDiv = document.getElementsByClassName('swapCount')[0];
let modal = document.getElementsByClassName('modal')[0];
console.time('swapElements');


const generateElements=()=>{
    array.style.border = '1px solid grey';
    cnt=0;
    document.getElementById('sortBtn').disabled=false;
    arr=[];
    array.innerHTML="";
    n=document.getElementById('num').value;
    if(n=="") alert("Enter number of elements to continue...");
    console.log(n);
    for(i=0;i<n;i++) arr.push(Math.ceil(Math.random()*400));
    console.log(arr);
    displayElements(arr);
}


const displayElements = (arr)=>{
    for(i=0;i<arr.length;i++){
        const div=document.createElement('div');
        // div.innerText = arr[i];
        div.classList=['elements'];
        div.id=i;
        // div.style.marginLeft=`${60*i}px`;
        if(window.innerWidth>=1024) div.style.width=`${window.innerWidth/(2*(arr.length+5))}px`;
        else div.style.width=`${window.innerWidth/(arr.length+5)}px`;
        div.style.height=`${arr[i]}px`;
        div.style.borderBottomLeftRadius='50px';
        div.style.borderBottomRightRadius='50px';
        array.appendChild(div);
    }
}


const sortElements = async ()=>{
    if(document.getElementById('algo').value==0){
        alert("Please select an algorithm");
        return;
    }
    console.log(arr);
    document.getElementById('sortBtn').disabled=true;
    const method=document.getElementById('algo').value;
    const n=arr.length;
    if(method==1 || method==2 || method==3 || method==4 || method==5) swapDiv.style.display="block"
    //array is not passed to the algorithms because height of elements is varied instead of swapping index
    if(method==0) alert("Please select an algorithm");   
    else if(method==1) bubbleSort(n);
    else if(method==2) insertionSort(n);
    else if(method==3) selectionSort(n);
    else if(method==4) modifiedBubbleSort(n);
    else if(method==5) {
        if(!(localStorage.getItem('msg'))){
            localStorage.setItem('msg', 'done');
            alert("For better experiencing quick sort and merge sort, try visualizing larger arrays");
        }
        quickSort(0,n); 
    }
    else if(method==6) {
        if(!(localStorage.getItem('msg'))){
            localStorage.setItem('msg', 'done');
            alert("For better experiencing quick sort and merge sort, try visualizing larger arrays");
        }
        await mergeSort(0,n-1);

        for(i=0;i<n;i++){
            await wait(300/n);
            correctPos(i);
        }
    }
    // displayElements(arr);
}

// Swap by Id
const swapById = async(i,j)=>{
    let a=document.getElementById(i).style.height;
    let b=document.getElementById(j).style.height;

    if(Number(a.slice(0,-2)) > Number(b.slice(0,-2))){
        cnt++;
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 1000/n);
        });

        let result = await promise.then(()=>{
            const tmp=a;
            // console.log(a,b);
            document.getElementById(i).style.height=b;
            // document.getElementById(j).id=i;
            document.getElementById(j).style.height=tmp;
            // document.getElementById(i).id=j;
        });
    }
    
}

const displayModal = ()=>{
    modal.style.transition = 'all 1s ease';
    modal.style.opacity='1';
    modal.style.pointerEvents='all';
    document.getElementById('main').style.opacity='0.5';
}

const closeModal = () => {
    modal.style.opacity='0';
    modal.style.pointerEvents='none';
    document.getElementById('main').style.opacity='1';
}

const addCustomElements = () => {
    let a=document.getElementById('custom-arr');
    acc=[];
    // console.log(typeof(a))
    let b = a.value.split(',');
    b.forEach(el=>{
        acc.push(Number(el.trim()));
    })
    arr=acc;
    array.innerHTML='';
    closeModal();
    array.style.border = '1px solid grey';
    displayElements(arr);
    a.value = '';
    cnt=0;
    document.getElementById('sortBtn').disabled = false;
}

const correctPos = (n)=>{
    document.getElementById(n).style.background="#2ecc72";
}

const showPicked=(i,j)=>{
    document.getElementById(i).style.background='#00CCCD';
    document.getElementById(j).style.background='#00CCCD';
}


const remPicked=(i,j)=>{
    document.getElementById(i).style.background='#99AAAB';
    document.getElementById(j).style.background='#99AAAB';
}

const wait = async (t)=>{
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1500/n)
    });

    let result = await promise;
}






const showVisual=(i,j)=>{

}
