musicManager.service('playlistService', function($http){
    // this.url = 'https://5fb73d8d8e07f00016642927.mockapi.io';
    this.url = 'http://localhost:3000';

    this.getListPlaylists = function(){
        return  $http.get(this.url + '/playlist').then(function(res){
            return res.data.reverse();
        })
    }
    this.addPlaylist = function(playlist){
        var request = {
            method: 'POST',
            url: this.url + '/playlist',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                name: playlist.name,
                kinds: playlist.kinds,
                songs: playlist.songs
            },
        }
        return $http(request).then(function(res){
            return res.data;
        })
    }
    
    this.deletePlaylist = function(id){
        return $http.delete(this.url + '/playlist/' + id).then(function(res){
            return res.data;
        })
    }

    this.updatePlaylist = function(playlist){
        var request = {
            method: 'PUT',
            url: this.url + '/playlist/' + playlist.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: playlist,
        }
        return $http(request).then(function(res){
            return res.data;
        })
        // return this.deletePlaylist(playlist.id).then(() => {
        //     return this.addPlaylist(playlist).then(data => {
        //         return data;
        //     });
        // }) 
    }   
})