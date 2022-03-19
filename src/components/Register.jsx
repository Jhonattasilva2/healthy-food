import { useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import styled from "styled-components";

function Register({ img }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm();
  const [cookies, setCookie] = useCookies([""]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  //submiting the form inside the handleSubmit function coming from useForm()

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);

    setTimeout(() => {
      document.location.reload();
    }, 2000);
  };

  const onSubmit = (data) => {
    console.log(data);
    //Setting the fields to empty string after submit the form
    setValue("name", "");
    setValue("nasc", "");
    setValue("cpf", "");
    setValue("cep", "");
    setValue("rua", "");
    setValue("numero", "");
    setValue("bairro", "");
    setValue("cidade", "");
    setValue("uf", "");
    setName(data.name);
    console.log(data);

    //Setting the form data to local storage
    let id = Math.floor(Math.random() * 1000);
    localStorage.setItem(`FormNumber${id}`, JSON.stringify(data));

    //Setting cookies
    setCookie(`Cokie${id}`, data, { path: "/" });

    //Opening the Modal after submit de form
    setTimeout(() => openModal(), 1500);
  };

  //Check the CEP API and fill the other fields
  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resp) => resp.json())
      .then((data) => {
        setValue("rua", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);
        setValue("uf", data.uf);
        setFocus("numero");
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <Section>
      <BackgroundImage src={img} alt="cozinhando" />
      <SectionDiv>
        <Title>Create Account</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            id="name"
            {...register("name", { required: true })}
            placeholder="Name"
          />
          <SpanValidation>{errors.name && "*Name is required"}</SpanValidation>
          <Input
            type="text"
            id="nasc"
            {...register("nasc", { required: true })}
            placeholder="Date of Birth"
            className="date-mask" //Mascara da data
          />
          <SpanValidation>
            {errors.nasc && "*Date of Birth is required"}
          </SpanValidation>
          <Input
            type="text"
            id="cpf"
            {...register("cpf", { required: true })}
            placeholder="CPF"
            className="cpf-mask" // Mascara do CPF
          />
          <SpanValidation>{errors.cpf && "*CPF is required"}</SpanValidation>
          <Input
            type="text"
            id="cep"
            {...register("cep", { required: true })}
            placeholder="CEP"
            onBlur={checkCep}
            className="cep-mask"
          />
          <SpanValidation>{errors.cep && "*CEP is required"}</SpanValidation>
          <Input
            type="text"
            id="rua"
            {...register("rua")}
            placeholder="Street"
          />
          <Input
            type="text"
            id="numero"
            {...register("numero", { required: true })}
            placeholder="House Number"
          />
          <SpanValidation>
            {errors.numero && "*House Number is required"}
          </SpanValidation>
          <Input
            type="text"
            id="bairro"
            {...register("bairro")}
            placeholder="District"
          />
          <Input
            type="text"
            id="cidade"
            {...register("cidade")}
            placeholder="City"
          />
          <Input type="text" id="UF" {...register("uf")} placeholder="UF" />
          <SubmitButton type="submit">Register</SubmitButton>
          <ModalContainer
            className="modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <DivModal onClick={closeModal}>
              <ModalTitle>Account created!</ModalTitle>
              <ModalText>
                Welcome {name}, to the begin of a healthy life!
              </ModalText>
              <ModalLink to="/">Back to home</ModalLink>
              <ModalSpan>Click on any place to close!</ModalSpan>
            </DivModal>
          </ModalContainer>
        </Form>
      </SectionDiv>
    </Section>
  );
}


//CSS of the page
const Section = styled.section`
width: 100%;
height: 100vh;
display: flex;

@media (max-width: 992px) {
  position: relative;
}
`;

const BackgroundImage = styled.img`
height: 100vh;

@media (max-width: 992px) {
  position: absolute;
  left: 0%;
  opacity: 0.12;
  z-index: -1;
}
`;

const SectionDiv = styled.div`
max-height: 100%;
display: flex;
flex-direction: column;
margin: auto;
border-radius: 8px;
box-shadow: 1px 5px 10px #bcbcbc;
padding: 20px 50px;

@media (max-width: 576px) {
  height: 100%;
}

@media (max-width: 400px) {
  width: 100%;
}
`;

const Title = styled.h1`
font-family: "Montserrat", sans-serif;
font-size: 32px;
font-weight: bold;
color: #1d164d;
margin: 15px 0;
text-align: center;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
width: 100%;
height: 35px;
border-radius: 6px;
font: 18px "Muli", sans-serif;
margin: 3% 0;
border: solid 1px #9e9baf;

&:focus {
  outline-color: #badc58;
}

&::placeholder {
  padding-left: 10px;
}
`;

const SpanValidation = styled.span`
color: red;
font-size: 13px;
`;

const SubmitButton = styled.button`
border: none;
background-color: #badc58;
color: #fff;
padding: 15px 30px;
border-radius: 5px;
margin-top: 1rem;
cursor: pointer;

&:hover {
  background-color: #abca4f;
}

&:active {
  transform: scale(0.98);
}
`;

const ModalContainer = styled(Modal)`
width: 100%;
height: 100%;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
`;

const DivModal = styled.div`
width: 50%;
height: 50%;
background: #fff;
box-shadow: 1px 5px 10px #bcbcbc;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media (max-width: 992px) {
  width: 67%;
  
}
`;

const ModalTitle = styled.h2`
font-family: "Montserrat", sans-serif;
font-size: 28px;
font-weight: bold;
padding: 30px;
color: #1d164d;

@media (max-width: 992px) {
  font-size: 26px;
  margin: auto 50%;
}

@media (max-width: 576px) {
  margin: 0 50%;
}
`;

const ModalText = styled.p`
font-family: "Muli", sans-serif;
font-size: 16px;
padding: 30px;
color: #9e9baf;

@media (max-width: 576px) {
  text-align: center;
  margin: 0;
}
`;

const ModalSpan = styled.span`
font-family: "Muli", sans-serif;
font-size: 10px;
color: #9e9baf;
margin: 3%;

@media (max-width: 576px) {
  display: none;
}
`;

const ModalLink = styled(Link)`
border: none;
background-color: #badc58;
color: #fff;
padding: 15px 30px;
border-radius: 5px;
cursor: pointer;

&:hover {
  text-decoration: none;
}

@media (max-width: 576px) {
  padding: 10px 20px;
  font-size: 14px;
}
`;


export default Register;
