new Vue(
    {
    el : '#app',
    data: {
        message:'Hello Vue !'
    }, 
}
);

var app2 = new Vue(
    {
        el : "#app2",
        data:{
            message : "La page a été affichée le " + new Date().toLocaleString()
        }
    }
);

var app3 = new Vue(
    {
        el: "#app3",
        data: {
           seen : true
        }
    }
);


var app4 = new Vue(
    {
        el: "#app4",
        data: {
            todos: [
                { text: 'Apprendre JS'},
                { text: 'Apprendre Vue' },
                { text: 'faire des bisous à ma femme' },
                { text: 'faire des bisous à ma fille' },
                { text: 'Changer sa couche' }

            ]
        }
    }
);

var app5 = new Vue(
    {
        el: '#app5',
        data: {
            message: 'Hello Vue.js !'
        },
        methods : {
            reverseMessage : function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    }
);

var app6 = new Vue(
    {
        el: '#app6',
        data: {
            message: "Lorem ipsum dolor sit amet"
                    // "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam nec tellus vehicula, consequat dolor in, aliquet mi.Aenean tristique in velit ac egestas.Etiam aliquet id lacus non sodales.Nunc eget libero velit.Integer at ornare quam, ac posuere augue.Nullam consequat tortor orci.Phasellus efficitur vestibulum turpis in tincidunt.Mauris id tempus orci, sit amet facilisis magna.Nunc sed quam porttitor, gravida quam sit amet, ultrices metus.Cras in aliquam erat.Ut non neque vulputate, placerat ante ac, tempor risus.Vestibulum finibus, elit ac varius aliquet, ante nisl sagittis erat, sed aliquet nulla dui vel odio.Praesent gravida turpis nec porta fermentum.Maecenas leo sapien, consequat pulvinar feugiat vel, pellentesque non ex."

        },
    }
);

Vue.component('todo-item', {
    props:["todo"],
    template:'<li>{{ todo.text}}</li>'
})

var app7 = new Vue({
    el:'#app7',
    data:{
        filmList:[
            { id: 0, text: 'saw0' },
            { id: 1, text: 'saw1' },
            { id: 2, text: 'saw2' },
            { id: 3, text: 'saw3' },
            { id: 4, text: 'saw4' },
            { id: 5, text: 'saw5' },
            { id: 6, text: 'saw6' },
            { id: 7, text: 'saw7' },
        ]
    }
})
