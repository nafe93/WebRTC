/**
 * Created by nafe on 15.02.2017.
 */
//zoom +-
var step = 60;
// ключ переключения
var key = 0;var key1 = 0;var key2 =0; var key3 = 0; var key4 =0;
var val =[]; // добавление и удаление фильтров
var str; // для хранения фильтров
// (/\,/g, " ") // регулярное выражение для замены всех "," на " "
function video() {
    // Кнопки фильтров
    var i = document.getElementById('i');
    var v = document.getElementById('v');
	var c = document.getElementById('c');
    var b = document.getElementById('b');
    var plus = document.getElementById('plus');
    var min = document.getElementById('min');

    var canvasx = document.getElementById('canvasx');
    var canvas0 = document.getElementById('canvas0');
    var canvas1 = document.getElementById('canvas1');
    var canvas2 = document.getElementById('canvas2');
    var canvas3 = document.getElementById('canvas3');
    var canvas4 = document.getElementById('canvas4');

    var ctxx = canvasx.getContext('2d');
    var ctx0 = canvas0.getContext('2d');
    var ctx1 = canvas1.getContext('2d');
    var ctx2 = canvas2.getContext('2d');
    var ctx3 = canvas3.getContext('2d');
    var ctx4 = canvas4.getContext('2d');
    // кнопка своткать
    var snapshot = document.getElementById("snapshot");
    // подключение камеры через getUserMedia
        navigator.getUserMedia = (  navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
    if (navigator.getUserMedia) {
        // Request access to video only
        navigator.getUserMedia(
            {
                video:true,
                audio:false
            },
            function(stream)
            {
                var url = window.URL || window.webkitURL;
                v.src = url.createObjectURL(stream);
                v.play();
            },
            function(error)
            {
                    alert('Что-то пошло не так. (номер ощибки ' + error.code + ')');
                    return 0;
            }
        );
    }
    else {
        alert('Извените, браузер не подерживает\'t getUserMedia');
        return 0;
    }
    //Кнопки для видео
    v.addEventListener('play',function () {
        (function loop() {
                ctx0.drawImage(v, 0, 0, 640, 480);
                setTimeout(loop, 1000 / 60);
        } )();
    },0);
    v.addEventListener('play',function () {
        (function loop() {
            ctx1.filter = 'invert(.8)';
            ctx1.drawImage(v,0,0,320,240);
            setTimeout(loop,1000/60);
        } )();
    },0);
    v.addEventListener('play',function() {
        (function loop() {
            ctx2.filter = 'blur(5px)';
            ctx2.drawImage(v,0,0,320,240);
            //60 кадров
            setTimeout(loop,1000/60);
        }());
    },0);

    v.addEventListener('play',function() {
        (function loop() {
            ctx3.filter = 'grayscale(1)';
            ctx3.drawImage(v,0,0,320,240);
            //60 кадров
            setTimeout(loop,1000/60);
        }());
    },0);
    v.addEventListener('play',function() {
        (function loop() {
            ctx4.filter = 'hue-rotate(90deg)';
            ctx4.drawImage(v,0,0,320,240);
            //60 кадров
            setTimeout(loop,1000/60);
        }());
    },0);
    snapshot.addEventListener('click',function () {
        if(key == 0) {
            canvas0.style.display = 'none';
            canvasx.style.display = 'inline';
            ctxx.drawImage(v, 0, 0, 640, 480);
            key = 1;
        }
        else if(key == 1){
            canvas0.style.display = 'inline';
            canvasx.style.display = 'none';
            key = 0;
        }
    });
    i.addEventListener('click',function () {
        if(key1 == 0) {
            key1 = 1;
            val.push('invert(.8)');
            str = val.join();
            str = str.replace(/\,/g, " ");
            ctx0.filter = str;
            ctxx.filter = str;
        }
        else if(key1 == 1){
            key1 = 0;
            delet('invert(.8)');
            str = val.join();
            str = str.replace(/\,/g, " ");
            if(str.length != 0)
            {
                ctx0.filter = str;
                ctxx.filter = str;
            }
            else if(str.length == 0)
            {
                ctx0.filter = 'none';
                ctxx.filter = 'none';
            }
        }
    });
    b.addEventListener('click',function () {
        if(key2 == 0) {
            key2 = 1;
            val.push('blur(5px)');
            str = val.join();
            str = str.replace(/\,/g, " ");
            ctx0.filter = str;
            ctxx.filter = str;
        }
        else if(key2 == 1){
            key2 = 0;
            delet('blur(5px)');
            str = val.join();
            str = str.replace(/\,/g, " ");
            if(str.length != 0)
            {
                ctx0.filter = str;
                ctxx.filter = str;
            }
            else if(str.length == 0)
            {
                ctx0.filter = 'none';
                ctxx.filter = 'none';
            }
        }
    });
    g.addEventListener('click',function () {
        if(key3 == 0) {
            key3 = 1;
            val.push('grayscale(1)');
            str = val.join();
            str = str.replace(/\,/g, " ");
            ctx0.filter = str;
            ctxx.filter = str;
            console.log(str);
        }
        else if(key3 == 1){
            key3 = 0;
            delet('grayscale(1)');
            str = val.join();
            str = str.replace(/\,/g, " ");
            console.log(str);
            if(str.length != 0)
            {
                ctx0.filter = str;
                ctxx.filter = str;
            }
            else if(str.length == 0)
            {
                ctx0.filter = 'none';
                ctxx.filter = 'none';
            }
        }
    });
    h.addEventListener('click',function () {
        if(key4 == 0) {
            key4 = 1;
            val.push('hue-rotate(90deg)');
            str = val.join();
            str = str.replace(/\,/g, " ");
            ctx0.filter = str;
            ctxx.filter = str;
            console.log(str);
        }
        else if(key4 == 1){
            key4 = 0;
            delet('hue-rotate(90deg)');
            str = val.join();
            str = str.replace(/\,/g, " ");
            console.log(str);
            if(str.length != 0)
            {
                ctx0.filter = str;
                ctxx.filter = str;
            }
            else if(str.length == 0)
            {
                ctx0.filter = 'none';
                ctxx.filter = 'none';
            }
        }
    });
    plus.addEventListener('click',function () {
        step += 10;
        document.body.style.zoom = step + '%';
    });
    min.addEventListener('click',function () {
        step -= 10;
        document.body.style.zoom = step + '%';
    });
    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }
    document.getElementById('download').addEventListener('click', function() {
        downloadCanvas(this, 'canvasx', 'test.png');
    }, false);
}
window.addEventListener('load',video);
function delet(name) {
    for (i = 0; i < val.length; i++) {
        if (val[i] == name) {
            delete val[i];
            var before = val.slice(0, i);
            var after = val.slice(i + 1);
            val = before.concat(after);
        }
    }
}