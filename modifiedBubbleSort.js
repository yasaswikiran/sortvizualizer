const modifiedBubbleSort=async(n)=>{
    for(i=0;i<n-1;i++){
        let tmp=cnt;
        for(j=0;j<n-1-i;j++){
            showPicked(j,j+1);
                await wait(1500/n);
                swapById(j,j+1)
                document.getElementById('cnt').innerText=cnt;
            remPicked(j,j+1);
        }
        correctPos(n-1-i);
        if(tmp===cnt){
            break;
        }    
    }
    for(k=0;k<n-1;k++){
        correctPos(k);
    }
}