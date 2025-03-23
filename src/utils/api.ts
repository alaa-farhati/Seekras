

export const baseUrl:string="http://192.168.122.1:3000"

export const login = async (body: LoginBody): Promise<LoginResponse> => {
    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: LoginResponse = await response.json();      
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw new Error(error instanceof Error ? error.message : "Login failed");
    }
  };
  // const handlePost = async () => {
  //   try {
  //     setIsSubmitting(true);
      
  //     // Prepare post data
  //     const postData = {
  //       userId: currentUserId,
  //       title: title,
  //       content: body,
  //       mediaUrls: selectedImages.length ? selectedImages.join(",") : null,
  //       postType: getPostType(),
  //       locationName: destination || null,
  //       taggedUsers: taggedPeople.map(person => person.id).join(",")
  //     };
      
  //     console.log("Submitting post:", postData);
      
  //     // Send post to API
  //     const response = await axios.post(API_URL, postData);
      
  //     console.log("Post created successfully:", response.data);
  //     Alert.alert("Success", "Your post has been published!");
  //     navigation.goBack();
  //   } catch (error) {
  //     console.error("Error creating post:", error);
  //     Alert.alert("Error", "Failed to publish your post. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };