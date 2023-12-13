import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styels from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={styels.container}>
      <div className={styels.infoContainer}>
        <div className={styels.imgContainer}>
          <Image src={user.img || "/images/noavatar.png"} fill alt="" />
        </div>
        {user.username}
      </div>
      <div className={styels.formContainer}>
        <form action={updateUser} className={styels.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />

          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />

          <label>Password</label>
          <input type="password" name="password" />

          <label>Phone</label>
          <input type="phone" name="phone" placeholder={user.phone} />

          <label>Address</label>
          <textarea name="address" placeholder={user.address}></textarea>

          <label>isAdmin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.Admin}>
              Yes
            </option>
            <option value={false} selected={!user.Admin}>
              No
            </option>
          </select>

          <label>isActive?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
