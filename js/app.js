const app = new Vue({
    el: '#app',
    data: {
        pokemonList: [
            {name: 'charizard', number: 6},
            {name: 'squirtle', number: 7},
            {name: 'pikachu', number: 25},
            {name: 'celebi', number: 251},
            {name: 'lucario', number: 448},
            {name: 'delphox', number: 655},
        ],
        nameFilter: ''
    },
    mounted: function(){
        PokeService.API.Pokemon.listAll().then(pokeList => {
            this.pokeList = pokeList;
        })
    },
    computed: {
        pokeList: function() {
            var nameFilter = this.nameFilter.toLowerCase();
            return this.pokemonList.filter( pokemon => pokemon.name.includes(nameFilter))
        }
    }
})