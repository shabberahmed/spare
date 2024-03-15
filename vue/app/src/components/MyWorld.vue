<template lang="">
    <div>
        hello hel[]
       <div v-if='bol'>
        <h1>{{myval.state}}</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi animi mollitia veniam maiores impedit autem, dicta et quisquam quidem dolor ipsum quibusdam error. At laudantium repellendus assumenda. Voluptate, quas minus?
       </div>
       <button @click="toggle">Click</button>
    </div>
</template>
<script>
export default{
    name:"myworld",
    data:function(){
    return{
        myval:{state:"showing"},
        bol:true,
        val:false
    }
    },
    methods: {
        toggle() {
            this.bol = !this.bol;
            console.log(this.bol);
        }
    }
}
</script>
<style lang="">
    
</style>