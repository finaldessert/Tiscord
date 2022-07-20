export const getfriends = friends => (
    $.ajax({
        method:'GET',
        url:'/api/friends',
        data: { friends }
    })
)

