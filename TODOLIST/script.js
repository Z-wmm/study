var app = new Vue({
    el:"#app",
    data:{
        task:'',
        i:0,
        flag:1,
        texts:[
        ],
        result:[

        ]
    },
    methods:{
        add:function(){
            if(this.flag){
                this.texts.push(this.task);
                this.task = ''
            }else{
                this.texts.splice(this.i,1,this.task)
                this.$refs.change.innerHTML = '添加'
                this.flag = 1
                this.task = '';
            }
           
        },
        del:function(index){
            this.texts.splice(index,1)
        },
        mod:function(index){
            this.task = this.texts[index];
            this.$refs.change.innerHTML = '修改'
            this.i =index
            this.flag = 0
        },
        sea:function(){
            for(item of this.texts){
                if(item.search(this.task)>= 0 ){
                    this.$refs.search.style.display = 'block'
                    this.result.push(item)
                }
            }
        }
    }
})