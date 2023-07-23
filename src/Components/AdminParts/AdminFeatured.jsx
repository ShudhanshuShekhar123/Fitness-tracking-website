import React from "react";
import { ArrowUpward } from "@material-ui/icons";
import styled from "styled-components";


export const AdminFeatured = ({userData}) => {


    const totalexercies = userData.reduce((total, el) => {
      const Exercies = el.exercise;
      const totalExercies = parseInt(Exercies);
      return total + totalExercies;
    }, 0);
    
    const subscriptionTotal = userData.reduce((total, el) => {
      const Subscription = el.subscription;
      const totalSubscription = parseInt(Subscription);
      return total + totalSubscription;
    }, 0);
    
    console.log("stu",totalexercies)
    console.log("fac",subscriptionTotal)

    const totalUsers = userData.length;
    
  
    return (
      <FeaturedContainer>
        <FeaturedItem>
          <FeaturedTitle>Users</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>{totalUsers}</FeaturedMoney>
            <FeaturedMoneyRate>
              <FeaturedIcon up={true} />
            </FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FeaturedSub>Total number of Members</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
          <FeaturedTitle>Exercies</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>{totalexercies}</FeaturedMoney>
            <FeaturedMoneyRate>
              <FeaturedIcon up={true} />
            </FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FeaturedSub>Total number of Exercises</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
          <FeaturedTitle>Subscription</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>{subscriptionTotal}</FeaturedMoney>
            <FeaturedMoneyRate>
              <FeaturedIcon up={true} />
            </FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FeaturedSub>Total number of Subscription</FeaturedSub>
        </FeaturedItem>
      </FeaturedContainer>
    );
  };

  const FeaturedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
`;

const FeaturedItem = styled.div`
  flex: 1;
  margin: 40px 20px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const FeaturedTitle = styled.span`
  font-size: 20px;
`;

const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const FeaturedIcon = styled(ArrowUpward)`
  font-size: 14px;
  color: ${({up}) => (up ? "green" : "red")};
`;
const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;