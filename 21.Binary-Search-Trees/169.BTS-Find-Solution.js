


function  find(value){
    if(this.root === null) return false;
    let current = this.root,
        found = false;
        while(current && !found){
            if(value < current.value){
                current =  current.left;
            } else if (value > current.value){
                current =  current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current; 
}


function contains(value){
    if(this.root === null) return false;
    let current = this.root,
        found = false;
        while(current && !found){
            if(value < current.value){
                current =  current.left;
            } else if (value > current.value){
                current =  current.right;
            } else {
                return true;
            }
        }
        return false; 
}
