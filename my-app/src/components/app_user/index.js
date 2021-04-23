import React, { memo } from 'react'
import { Avatar, Upload, message } from 'antd';
import { withRouter, Link } from 'react-router-dom'
// import { CameraFilled} from '@ant-design/icons'
import { useSelector, shallowEqual } from 'react-redux'
import { AppUserWrapper } from './style'
import { uploadAvatar } from '@/services/moment'

export default withRouter(memo(function HYUser (props) {

    const { userInfo } = useSelector(state => ({
        userInfo: state.getIn(["login", "userInfo"])
    }), shallowEqual)

    const uploadProps = {
        showUploadList: false,
        // beforeUpload: file => {
        //     formData.append('avatar', file)
        //     return false
        // },
        beforeUpload: file => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error('你需要上传 JPG/PNG 格式的文件!');
            }
            const isLt1M = file.size / 1024 / 1024 < 1;
            if (!isLt1M) {
                message.error('文件必须小于 1MB!');
            }
            return isJpgOrPng && isLt1M;
        },
        customRequest: async info => {//手动上传
            const formData = new FormData();
            formData.append('avatar', info.file);//名字和后端接口名字对应
            const res = await uploadAvatar(formData)
            if (res.statusText === "OK") {
                props.history.push('/')
            }
        },
    }

    return (
        <AppUserWrapper>
            <div className="avatar">
                <Upload
                    {...uploadProps}>
                    <Avatar
                        size={48}
                        src={userInfo.avatarUrl}
                    >用户</Avatar>
                </Upload>
            </div>
            <h3>{userInfo.name}</h3>
            <span>我的动态：<Link to="/#">{userInfo.momentCount}</Link></span>
        </AppUserWrapper>
    )
}))
