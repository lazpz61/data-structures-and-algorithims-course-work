function DepthFirstSearchPreOrder(){
    let visited = [],
        current = this.root;  
        function traverse(node){
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return visited;       
}  