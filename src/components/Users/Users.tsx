import React from 'react';
import s from "./users.module.css";
import userDefault from "../../assets/img/default_avatar.png";

const Users = (props: any) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.content}>
            {pages.map(p => {
                return (
                    <span key={p}
                          className={props.currentPage === p ? s.selectedPage : ''}
                          onClick={() => props.onPageChanged(p)}>
                            {p}
                        </span>
                )
            })}
            {props.users.map((u:any) => {
                const followHandler = () => props.follow(u.id)
                const unfollowHandler = () => props.unfollow(u.id)
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img className={s.avatar} src={(u.photos.small ? u.photos.small : userDefault)} alt=""/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={unfollowHandler}>Unfollow</button>
                                    : <button onClick={followHandler}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
};

export default Users;