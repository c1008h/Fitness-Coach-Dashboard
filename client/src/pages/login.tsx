// import { useEffect, useRef } from "react";
// import { useLogin } from "@pankod/refine-core";
import { Container, Box } from "@pankod/refine-mui";

export const Login: React.FC = () => {
  // const { mutate: login } = useLogin<CredentialResponse>();

  return (
    <Box component="div" sx={{ backgroundColor: "#FCFCFC" }}>
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div>
                    {/* <img src={yariga} alt="Yariga Logo" /> */}
                </div>
                <Box mt={4}>
                    {/* <GoogleButton /> */}
                </Box>
            </Box>
        </Container>
    </Box>  
  )
}
