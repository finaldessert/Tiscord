export const getfriends = user_id => (
    $.ajax({
        method:'GET',
        url:'/api/friends',
        data: { user_id }
    })
)

