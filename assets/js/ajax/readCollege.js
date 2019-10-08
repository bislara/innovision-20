$.ajax({
    type: "GET",
    url: "../apis/collegeList/readCollege.php",
    success: function (data) {

        var temp = '';
        var dataArray = JSON.parse(data).result;
        display_college(dataArray);

    },
    error: function (data) {
        console.log(data);
    }
});