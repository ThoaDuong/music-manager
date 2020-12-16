musicManager.service('songService', function(){
    this.listSongs = [];

    this.getListSongs = function(){
        return this.listSongs;
    }
    this.addSong = function(song){
        var newSong = {
            id: Date.now(),
            name: song.name,
            artist: song.artist,
        }
        this.listSongs.push(newSong);
        return newSong;
    }
    this.updateSong = function(song){
        this.listSongs.forEach(val => {
            if(song.id === val.id){
                val = song;
            }
        })
        return song;
    }
    this.deleteSong = function(id){
        this.listSongs.forEach((val, index) => {
            if(id === val.id){
                this.listSongs.splice(index, 1)
            }
        })
    }
})