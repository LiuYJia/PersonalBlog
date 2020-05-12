export default {

    html2Escape(sHtml) {
        return sHtml.replace(/[<>&"]/g,function(c){
        return {
               '<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'
                }[c];
        });
    },

    
    changeTime(time) {
        var newDate = new Date(time)
        var year = newDate.getFullYear()
        var mounth = newDate.getMonth()+1
        var day = newDate.getDate()
        var hours = newDate.getHours()
        var mins = newDate.getMinutes()
        var seconds = newDate.getSeconds()
        var val = year+'-'+mounth+'-'+day+' '+hours+':'+mins+':'+seconds
        return val;
    }

    
}