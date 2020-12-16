
(function(){
    'use strict';

    musicManager.controller('actionSongController', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $location, songService, playlistService, $rootScope){
        init();
        function init(){
        }


        var onCreateSong = function(song){
            var result = songService.addSong(song);
            if(result){
                $.notify({
                    message: 'Created success!' 
                },{
                    type: 'success',
                });
            }else{
                $.notify({
                    message: 'Created fail!' 
                },{
                    type: 'danger',
                });
            }
            $location.path("/manager");
            $rootScope.resetSong();
        }
        var onApplyEditSong = function(song){
            songService.updateSong(song);
            playlistService.getListPlaylists().forEach(playlist => {
                playlist.songs.forEach((element) => {
                    if (element.id === song.id) {
                        element.name = song.name;
                        element.artist = song.artist;
                        playlistService.updatePlaylist(playlist);
                    }
                });
            })
            $rootScope.isEdit = false;
            $rootScope.resetSong();
            $location.path("/manager");
        }
        $scope.onSubmit = function(song){
            if(song.id === -1){
                onCreateSong(song);
            }else{
                onApplyEditSong(song);
            }
        }
        $scope.onCancelSubmit = function(){
            $rootScope.resetSong();
            $location.path("/manager");
        }
    }
}());