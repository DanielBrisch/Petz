FROM node:20
WORKDIR /app/front  
COPY ./ .           
RUN npm install      
RUN npm run build  
CMD ["npm", "run", "dev"] 
EXPOSE 5173 
