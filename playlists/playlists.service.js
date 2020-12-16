musicManager.service('playlistService', function($http, CONSTANT){
    this.listPlaylist = [];

    this.getListPlaylists = function(){
        return this.listPlaylist;
    }
    this.addPlaylist = function(playlist){
        var newPlaylist = {
            id: Date.now(),
            name: playlist.name,
            songs: playlist.songs,
            kinds: playlist.kinds,
        }
        this.listPlaylist.push(newPlaylist);
        return newPlaylist;
    }
    
    this.deletePlaylist = function(id){
        this.listPlaylist.forEach((val, index) => {
            if(id === val.id){
                this.listPlaylist.splice(index, 1)
            }
        })
    }

    this.updatePlaylist = function(playlist){
        this.listPlaylist.forEach(val => {
            if(playlist.id === val.id){
                val = playlist;
            }
        })
        return playlist;
    }   
})