import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Img } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function LoginPagePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login action (e.g., validate input, authenticate user)
    console.log('Email:', email);
    console.log('Password:', password);
    // You can implement your authentication logic here
  };


  return (
    <>
      <Helmet>
        <title>sakhi</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex justify-center bg-gray-200 px-8 py-8 md:p-5">
        <div className="mx-auto flex w-full max-w-screen-md max-h-screen-sm justify-center rounded-lg bg-blue_gray-100 md:flex-col md:p-5">
          <div className="w-[50%] md:w-full rounded-tl-lg rounded-bl-lg bg-green-400 p-10 md:p-5">
            <Img
              src="images/img_image_69.png"
              alt="imagesixtynine"
              className="mb-1 mt-1 h-90 w-auto center"
            />
          </div>
          <div className="flex flex-1 flex-col items-start rounded-tr-lg rounded-br-lg bg-white-A700_01 p-4 md:self-stretch md:p-5">
            <Tabs
              className="mb-2 mt-4 flex flex-col items-end gap-4 md:gap-5 md:w-full"
              selectedTabClassName="!text-black-900 bg-green-100"
              selectedTabPanelClassName="my-auto relative tab-panel--selected"
            >
              <div className="flex flex-col items-center md:w-full">
                <a href="Login" target="_blank" rel="noreferrer">
                  <Text size="4xl" as="p" className="!font-inknutantiqua !text-green-700 ml-[20%]">
                    Login
                  </Text>
                </a>
                <TabList className="relative mt-[-13px] flex flex-wrap items-start justify-between gap-5 self-stretch md:gap-5">
                  <Tab className="mb-1 ml-4 mt-5 font-inknutantiqua text-3xl font-normal text-black-900">
                    Entrepreneur
                  </Tab>
                  <Tab className="mr-11 mt-5 font-inknutantiqua text-3xl font-normal text-black-900">
                    Customer
                  </Tab>
                </TabList>
              </div>
              <div className="relative h-96 self-stretch">
                {[...Array(2)].map((_, index) => (
                  <TabPanel key={`tab-panel${index}`} className="absolute w-full">
                    <div className="absolute bottom-0 right-0 top-0 left-0 h-max w-full">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-gray-600">
                          Email/Phone no.
                        </Text>
                        <Input
                          shape="square"
                          name="phone"
                          className="mt-2 self-stretch border-green-900_02 sm:pr-5"
                          value={email}
                          onChange={handleEmailChange}
                        />
                        <Text as="p" className="ml-2.5 mt-5 !text-gray-600 md:ml-0">
                          Password
                        </Text>
                        <Input
                          shape="square"
                          name="password"
                          className="mt-2 self-stretch border-green-900_01 sm:pr-5"
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        <a href="/profilepage">
                        <Button
                          color="green_900"
                          size="2xl"
                          variant="fill"
                          shape="round"
                          className="mt-4 min-w-[150px] self-center font-inriaserif sm:px-5"
                          onClick={handleLogin}
                        >
                          Login
                        </Button>
                        </a>
                      </div>
                    </div>
                  </TabPanel>
                ))}
                <div>
                  <Text size="1xl" as="p" className="absolute bottom-5 left-[20%] m-auto !font-lindenhill">
                    Don’t have an account ?
                  </Text>
                  <a href="/registerpage">
                    <Text size="1xl" as="p" className="absolute bottom-5 left-[70%] m-auto !font-lindenhill !text-light_blue-A700 transform -translate-x-1/2 cursor-pointer">
                      SignUp
                    </Text>
                  </a>
                </div>
                <div className="mt-20">
                  <Text size="1xl" as="p" className="absolute bottom-0 mt-4 left-[20%] m-auto !font-lindenhill">
                    Forgot Password ?
                  </Text>
                  <Text size="1xl" as="p" className="absolute bottom-0 left-[70%] m-auto !font-lindenhill !text-light_blue-A700 transform -translate-x-1/2">
                    Reset
                  </Text>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
