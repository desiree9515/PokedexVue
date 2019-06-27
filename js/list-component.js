Vue.component('my-list', {
    template: `
    <li class="poke-list-item">
        <img :src="sprite" />
        <span>{{pokemon.number | pokeNumber}} - {{pokemon.name}}</span>
    </li>
    `,
    props: ['pokemon'],
    computed: {
        number: function(){
            return Vue.filter('pokeNumber')(this.pokemon.number);
        },
        sprite: function(){
            return `./img/${this.number}.png`
        }
    }
})