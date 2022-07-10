import React from "react";
import ListTile from "./ListTile";

export default function List(){
    return (
        <div className="w3-container w3-padding w3-half w3-padding-48">
            <ul className="w3-ul">
                <li><div><span className="w3-xlarge"><b>Superviser</b></span></div></li>
                <ListTile title="Dr. Supriya Mohanty" subtitle="IIT BHU Prof." url="https://iitbhu.ac.in/dept/civ/people/supriyaciv" img="https://iitbhu.ac.in/sites/default/files/styles/iitbhu_profile/public/user_pictures/picture-288-1529740644.jpg?itok=q9sCoKpZ"/>
                <li><div><span className="w3-xlarge"><b>Exploratory Projects</b></span></div></li>
                <ListTile title="Soil classification" subtitle="Sanskar Jain" url="https://colab.research.google.com/drive/1LBJSN49G34-LQXpQFIh6GJM5VnuPqSpd" img="https://lh3.googleusercontent.com/fife/ABSRlIoef-aVS7W1iyATPvhb5-c0MSCv4dNO2mWZ0rB-FnH3YjY3_vuK7H-E8U_YS26K7FnI-GFrk0aOhfo4mGY-si4tFJ7-4IlK8iUoh5wrAbD1TsYHbciSepMHT6ZdO4FPcXrmozGlZPqIVFbRn8ksosNbmHFaTR2e4YemH6NeqV1c7RBpDFYdgwDM40cQOcwBcn5Nnf5Ckly91nqzB9Y1LTRPjOhDClE4EmEtUZ6e12efc-6eICRg0N60lC4Ti3ekFFLS7qRpb19ffZdfgYNIE3CXzmsBE5IrD_lOydXZerJpseR-rfXSk7c-HPcXwtbpphym3PzcgWSP0CcCeOuM8jNTxYKAViVLJpEG2t7MpzgVve1YsYuGibx9v1U9nUCuuTVeJVsxbXfUCOqIXad8pLPJpjCkU-2XGuIG7P9CzZvHknAcLjSgSEM5ttbsIhRSis8v_ogWkERT9Fd5ZE5aHMiLzjSwGPeIDrt5H6_c6_VbUU4F8i-zHu8Hq2Nml6JjY72Y2eSxxZa8z3xEiRe2HPbr-GNN_JKKPc8Wb7M5bweNov8ZqYFn76RHsqHZhh66FjYujSGr7tOQsv7VCittgGGXZdNWeQxvoAf_YC1UELuQsiBTiTR4AbEM4YlQIWd3Ypgmb7G5ljL6ruaOAJgHZT47YDJvyzmi1piQLoe_ybmnLV_eRGN3UR2lPd20XOCFP6OKa4IY5g9-_VPC41IYgGIeiQdfIhLxSr_qsf5rklzaLg=s192-c"/>
                <ListTile title="Shear strength of soil" subtitle="Mansi" url="https://colab.research.google.com/drive/1S6dQK17fSjibz5eQTWc_XCn8s1hXJxeD?usp=sharing" img="https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35716593-stock-illustration-vector-male-user-icon.jpg, https://st.depositphotos.com/1537427/3571/v/600/depositphotos_35716593-stock-illustration-vector-male-user-icon.jpg"/>
                <ListTile title="Stability of Slopes" subtitle="Rakshit Gautam" url="https://colab.research.google.com/drive/19zMZyieAhHp9R6QoIo-4eaX2xyhlSdZT?usp=sharing" img="https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35716593-stock-illustration-vector-male-user-icon.jpg, https://st.depositphotos.com/1537427/3571/v/600/depositphotos_35716593-stock-illustration-vector-male-user-icon.jpg"/>
                <ListTile title="Permeability" subtitle="Anand" url="https://colab.research.google.com/drive/1PL8uvkCtF5iJvkhi7YIEx1tRbWFhWAX5?usp=sharing" img="https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35716593-stock-illustration-vector-male-user-icon.jpg, https://st.depositphotos.com/1537427/3571/v/600/depositphotos_35716593-stock-illustration-vector-male-user-icon.jpg"/>
                <ListTile title="Consolidation" subtitle="Varad Patel" url="https://colab.research.google.com/drive/1n2lXI92PVB_wcb-U9wS_dzbScBrDVqfl" img="https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35716593-stock-illustration-vector-male-user-icon.jpg, https://st.depositphotos.com/1537427/3571/v/600/depositphotos_35716593-stock-illustration-vector-male-user-icon.jpg"/>
            </ul>
        </div>
    )
}